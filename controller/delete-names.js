const { db } = require('../model/profile-model');
const Profile = require('../model/profile-model');

// ROUTE HANDLER CALLBACK FUNCTIONS

// Display delete form on GET.
exports.profile_delete_get = (req, res) => {
    res.render('delete-names');
};

// Handle delete on POST.
exports.profile_delete_post = (req, res) => {
    let nameId = req.params;
    console.log(nameId);

   db.collection('Profiles').deleteOne({name: nameId})
   .then( (result) => {
       res.render('home');
   })
    
};

// Display pop up 
exports.profile_delete_popup = (req, res) => {
    res.render('delete-pop-up');
};

