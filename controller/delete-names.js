const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('delete-names')
});

router.get('/:name', (req, res) => {
    res.render('delete-pop-up')
});

router.delete('/name', (req, res) => {
    res.render('home')
});

module.exports = router;

const Profile = require('../model/profile-model');

// ROUTE HANDLER CALLBACK FUNCTIONS

// Display delete form on GET.
exports.profile_delete_get = (req, res) => {
    console.log('404');
};

// Handle delete on POST.
exports.profile_delete_post = (req, res) => {
    console.log(`404 ${req.params.id}`);
};

// Display pop up 
exports.profile_delete_popup = (req, res) => {
    console.log(`404 ${req.params.id}`);
};
