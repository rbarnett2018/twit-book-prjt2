const Profile = require('../model/profile-model');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// ROUTE HANDLER CALLBACK FUNCTIONS

// Display update names on GET.
exports.profile_update_get_names = (req, res) => {
  namesPopulated = [
      'Ronald Barnett',
      'Clear Carter',
      'Chimene Barnett',
      'Ginger Barnett',
      'Torry Robinson',
      'Keylis Bridgeforth',
      'Cleo Carter',
      'Beauty Barnett'
  ]
   res.render('update-names', {
       name1:namesPopulated[0],
       name2:namesPopulated[1],
       name3:namesPopulated[2],
       name4:namesPopulated[3],
       name5:namesPopulated[4],
       name6:namesPopulated[5],
       name7:namesPopulated[6],
       name8:namesPopulated[7],
   })
   
};

// Display edit form.
exports.profile_detail = (req, res) => {
    let profile = req.params.name;
    let profileS = profile.slice(1);
    Profile.find({name: profileS})
    .then(Profile => res.json(Profile))


    
    
    
    //  res.render('update-form',{
    //      name: req.query[1],
    //     bio: req.query[1],
    //     birthday: req.query[1]}); 
};

// Handle update on PUT.
exports.profile_update_put = (req, res) => {
    db.collection('Profiles').updateOne()
    res.render('home');
};

