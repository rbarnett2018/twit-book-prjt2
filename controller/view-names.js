const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('view-names')
});

router.get('/:name', (req, res) => {
    res.render('view-specific')
});

module.exports = router;

const Profile = require('../model/profile-model');

// ROUTE HANDLER CALLBACK FUNCTIONS

// Display list
exports.profile_list = (req, res) => {
    console.log('404');
};
// Display homepage with enlarged profile
exports.profile_enlarged = (req, res) => {
    console.log(`404 ${req.params.id}`);
};