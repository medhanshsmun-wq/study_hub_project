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

// Serve the frontend static files
const frontendPath = path.join(__dirname, '..', 'frontend');
app.use(express.static(frontendPath));

// API Routes
require(path.join(__dirname, 'authRoutes.js'))(app);
app.get('/api/data', (req, res) => {
    res.json(studyData);
});

// --- Improved Frontend Serving ---
// All non-API routes should serve the main frontend file
// This MUST be after all other API and auth routes
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