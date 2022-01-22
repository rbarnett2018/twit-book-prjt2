var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('create-form')
});

router.post('/', (req, res) => {
    res.render('home')
});

module.exports = router;

const Profile = require('../model/profile-model');

// ROUTE HANDLER CALLBACK FUNCTIONS

// Display create form on GET.
exports.profile_create_get = (req, res) => {
    console.log('404');
};

// Handle create on POST.
exports.profile_create_post = (req, res) => {
    console.log('404');
};