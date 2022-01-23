const Profile = require('../model/profile-model');

// ROUTE HANDLER CALLBACK FUNCTIONS

// Display list
exports.profile_list = (req, res) => {
    res.render('view-names');
};
// Display homepage with enlarged profile
exports.profile_enlarged = (req, res) => {
    res.render('view-specific');
};

