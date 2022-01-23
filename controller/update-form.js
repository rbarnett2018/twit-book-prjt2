const Profile = require('../model/profile-model');

// ROUTE HANDLER CALLBACK FUNCTIONS

// Display update names on GET.
exports.profile_update_get_names = (req, res) => {
   Profile.find({})
   const profiles = await query.exec();
   console.log(profiles.name);
   
};

// Display detail page for a specific profile.
exports.profile_detail = (req, res) => {
     res.render('update-form'); 
};

// Handle update on PUT.
exports.profile_update_put = (req, res) => {
    res.render('home');
};

