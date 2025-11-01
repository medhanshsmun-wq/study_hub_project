const Chat = require("./Chat.js");
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize the Google Generative AI client with the GOOGLE API key.
// Allow the model name to be overridden via GEMINI_MODEL env var (useful for switching between versions).
if (!process.env.GOOGLE_API_KEY) {
  console.warn('GOOGLE_API_KEY is not set. Generative AI calls will fail until you provide a valid key in your environment.');
}
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

/**
 * POST /api/new-chat
 * Creates a new chat session for a user.
 */
async function createNewChat(req, res) {
  // The user's ID should be available from your authentication middleware
  const userId = req.user.id;
  const { title } = req.body;

  if (!userId || !title) {
    return res.status(400).json({ error: "User ID and title are required." });
  }

  try {
    const chat = await Chat.create({
      userId,
      title,
      messages: [] // Start with an empty message array
    });
    res.status(201).json({ chatId: chat._id, title: chat.title });
  } catch (error) {
    console.error("Error creating new chat:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

/**
 * POST /api/chat
 * Handles a new message in an existing chat session.
 */
async function handleChat(req, res) {
  // Defensive: req.user may be undefined if authentication hasn't been established properly.
  const userId = req.user && req.user.id;
  const { chatId, userMessage } = req.body;

  console.log('handleChat called', { userId, chatId: chatId || null, hasFile: !!req.file });

  if (!userId) {
    console.warn('handleChat: missing req.user - user not authenticated');
    return res.status(401).json({ error: 'User not authenticated' });
  }

  if (!chatId || !userMessage) {
    return res.status(400).json({ error: "Chat ID and user message are required." });
  }

  // Helper function to convert buffer to a Gemini-compatible file part
  const fileToGenerativePart = (file) => {
    return {
      inlineData: {
        data: file.buffer.toString("base64"),
        mimeType: file.mimetype,
      },
    };
  };
  try {
    // Find the specific chat session, ensuring it belongs to the user for security
    const chat = await Chat.findOne({ _id: chatId, userId });
    if (!chat) return res.status(404).json({ error: "Chat not found" });

    // Add user message to the conversation
    const userMessageDoc = chat.messages.create({ role: "user", content: userMessage });
    chat.messages.push(userMessageDoc);

    // Prepare the chat history for the Gemini API, excluding the latest user message.
    const history = chat.messages.slice(0, -1).map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    // Allow selecting the model via env var; default to gemini-2.5-flash which is commonly used
    const modelName = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
    const model = genAI.getGenerativeModel({ model: modelName });
    const chatSession = model.startChat({ history });

    // Prepare the prompt parts, including the file if it exists
    const promptParts = [userMessage];
    if (req.file) {
      const filePart = fileToGenerativePart(req.file);
      promptParts.push(filePart);
    }

    // Call the generative model. If the external API fails (invalid key, rate limit, etc.),
    // catch the error and return a friendly fallback reply instead of returning HTTP 500.
    let aiReply;
    try {
      const result = await chatSession.sendMessage(promptParts);
      aiReply = (result && result.response && typeof result.response.text === 'function') ? result.response.text() : '';
    } catch (aiError) {
      // Log detailed error for server-side debugging
      console.error('Generative AI call failed:', aiError);

      // Friendly fallback so frontend doesn't see a 500 and user still gets a response
      aiReply = 'Athena is currently unavailable (AI service error). Please try again later.';
    }

    // Save the AI's reply and update the timestamp
    const assistantMessageDoc = chat.messages.create({ role: "assistant", content: aiReply });
    chat.messages.push(assistantMessageDoc);
    chat.updatedAt = Date.now();
    await chat.save();

    res.json({ userMessage: userMessageDoc, assistantMessage: assistantMessageDoc });
  } catch (error) {
    console.error("Error handling chat:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

/**
 * GET /api/chat/:chatId/messages
 * Fetches all messages for a specific chat.
 */
async function getChatMessages(req, res) {
  const userId = req.user.id;
  const { chatId } = req.params;

  try {
    const chat = await Chat.findOne({ _id: chatId, userId });
    if (!chat) {
      return res.status(404).json({ error: "Chat not found or you do not have permission." });
    }
    res.json({ messages: chat.messages });
  } catch (error) {
    console.error("Error fetching chat messages:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

/**
 * GET /api/chats
 * Fetches all chat sessions for a user.
 */
async function listUserChats(req, res) {
    const userId = req.user.id;
    try {
        const chats = await Chat.find({ userId }).select("title updatedAt").sort({ updatedAt: -1 });
        res.json(chats);
    } catch (error) {
        console.error("Error listing user chats:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

/**
 * PUT /api/chat/:chatId/rename
 * Renames a specific chat session.
 */
async function renameChat(req, res) {
    const userId = req.user.id;
    const { chatId } = req.params;
    const { newTitle } = req.body;

    if (!newTitle) {
        return res.status(400).json({ error: "New title is required." });
    }

    try {
        const chat = await Chat.findOneAndUpdate(
            { _id: chatId, userId },
            { title: newTitle, updatedAt: Date.now() },
            { new: true } // Return the updated document
        );

        if (!chat) {
            return res.status(404).json({ error: "Chat not found or you do not have permission." });
        }
        res.json({ message: "Chat renamed successfully.", chat });
    } catch (error) {
        console.error("Error renaming chat:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

/**
 * DELETE /api/chat/:chatId
 * Deletes a specific chat session.
 */
async function deleteChat(req, res) {
    const userId = req.user.id;
    const { chatId } = req.params;

    try {
        const result = await Chat.deleteOne({ _id: chatId, userId });
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: "Chat not found or you do not have permission." });
        }
        res.status(204).send(); // 204 No Content for successful deletion
    } catch (error) {
        console.error("Error deleting chat:", error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = {
    createNewChat,
    handleChat,
    getChatMessages,
    listUserChats,
    renameChat,
    deleteChat
};
