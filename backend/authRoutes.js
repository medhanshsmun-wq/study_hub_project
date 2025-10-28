const passport = require('passport');
const mongoose = require('mongoose');
require('./User'); // Ensure the User model is loaded
const User = mongoose.model('users');

module.exports = app => {
    app.get(
        '/auth/google',
        passport.authenticate('google', {
            scope: ['profile', 'email']
        })
    );

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/');
        }
    );

    app.get('/api/logout', (req, res, next) => {
        // As of passport@0.6.0, req.logout() is now an asynchronous function.
        req.logout(function(err) {
            if (err) { return next(err); }
            res.redirect('/');
        });
    });

    app.get('/api/current_user', (req, res) => {
        res.json(req.user || null);
    });

    app.post('/api/profile', async (req, res) => {
        if (!req.user) {
            return res.status(401).send({ error: 'You must be logged in!' });
        }
        const user = await User.findByIdAndUpdate(req.user.id, { branch: req.body.branch, year: req.body.year }, { new: true });
        res.send(user);
    });
};