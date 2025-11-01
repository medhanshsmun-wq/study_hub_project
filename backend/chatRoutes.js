const express = require('express');
const multer = require('multer');
const {
  createNewChat,
  handleChat,
  getChatMessages,
  listUserChats,
  renameChat,
  deleteChat
} = require('./chatController.js');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// This is a placeholder for your authentication middleware.
// It should verify the user is logged in and attach user info to req.user.
const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) { // Example using Passport.js
    return next();
  }
  res.status(401).json({ error: 'User not authenticated' });
};

const router = express.Router();

router.get('/chats', isAuthenticated, listUserChats);
router.post('/new-chat', isAuthenticated, createNewChat);
router.post('/chat', isAuthenticated, upload.single('file'), handleChat); // Add multer middleware here
router.get('/chat/:chatId/messages', isAuthenticated, getChatMessages);
router.put('/chat/:chatId/rename', isAuthenticated, renameChat);
router.delete('/chat/:chatId', isAuthenticated, deleteChat);

module.exports = router;