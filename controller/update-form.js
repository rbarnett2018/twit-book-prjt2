const Profile = require('../model/profile-model');

// ROUTE HANDLER CALLBACK FUNCTIONS

// Display update names on GET.
exports.profile_update_get_names = (req, res) => {
    console.log('404');
};

// Display detail page for a specific profile.
exports.profile_detail = (req, res) => {
     console.log(`404 ${req.params.id}`); 
};

// Handle update on PUT.
exports.profile_update_put = (req, res) => {
    console.log('404');
};