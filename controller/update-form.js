const Profile = require('../model/profile-model');

// ROUTE HANDLER CALLBACK FUNCTIONS

// Display update names on GET.
exports.profile_update_get_names = (req, res) => {
    res.render('update-names');
};

// Display detail page for a specific profile.
exports.profile_detail = (req, res) => {
     res.render('update-form'); 
};

// Handle update on PUT.
exports.profile_update_put = (req, res) => {
    res.render('home');
};

