require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');


// --- Refactored Data Loading ---
let studyData;
try {
    const dataModule = require(path.join(__dirname, '..', 'data.js'));
    studyData = dataModule.studyData;
} catch (error) {
    console.error('Failed to load data.js:', error.message);
    console.error('Please ensure data.js exists in the project root and exports studyData correctly.');
    process.exit(1); // Exit the process if data.js cannot be loaded
}

require(path.join(__dirname, 'User.js'));
require(path.join(__dirname, 'passport.js'));

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(
    session({
        secret: process.env.COOKIE_KEY,
        resave: false,
        saveUninitialized: false
    })
);
app.use(passport.initialize());
app.use(passport.session());


// --- API Router Setup ---
const apiRouter = express.Router();

// Register auth routes on the apiRouter first
const authRouter = require(path.join(__dirname, 'authRoutes.js'));
apiRouter.use(authRouter);

// Register chat routes on the apiRouter
const chatRouter = require(path.join(__dirname, 'chatRoutes.js'));
apiRouter.use(chatRouter); // chatRouter paths are relative to the mount point

apiRouter.get('/data', (req, res) => {
    res.json(studyData);
});

// Health endpoint: reports whether Gemini API key and model are configured.
// This endpoint does NOT call the external API and is safe to use for configuration checks.
apiRouter.get('/health', (req, res) => {
    res.json({
        ok: true,
        geminiKeyPresent: !!process.env.GOOGLE_API_KEY,
        geminiModel: process.env.GEMINI_MODEL || 'gemini-2.5-flash',
        mongoConnected: mongoose.connection.readyState === 1
    });
});

// Mount the consolidated API router
app.use('/api', apiRouter);

// --- Frontend Serving (MUST be after API routes) ---
const frontendPath = path.join(__dirname, "..", "frontend");

// 1. Serve static files like script.js, style.css, and images from the 'frontend' directory.
app.use(express.static(frontendPath));

// 2. For any other GET request that is not an API call, serve the main index.html file.
// This is the catch-all for client-side routing in a Single-Page Application.
app.get(/^(?!\/api).*/, (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('MongoDB connected...');
        app.listen(PORT, () => {
            console.log(`🚀 Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);

        
    });