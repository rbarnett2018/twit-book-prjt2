const Profile = require('../model/profile-model');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// ROUTE HANDLER CALLBACK FUNCTIONS

// Display update names on GET.
exports.profile_update_get_names = (req, res) => {
  Profile.find({}, {'name':1,_id:0})
  .then((Profile) => {
      namesPopulated =[]; 
      for (let i = 0; i < Profile.length; i++) {
          let Pro = Profile[i].name;
      if(Pro !== null){
          namesPopulated.push(Pro)
      } else {
          let ind = namesPopulated.indexOf(Pro);
          namesPopulated.splice(ind, 1);
      }
  } 
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

})};

// Display edit form.
exports.profile_detail = (req, res) => {
  let nameId = req.params.name;
    let nameIdS = nameId.slice(1);
    Profile.find({name: nameIdS})
    .then((Profile) => {
      let name = Profile[0].name; 
       let birthday = Profile[0].birthday;
      let bio =Profile[0].bio;
      res.render('update-form', {
        name: name,
        birthday: birthday,
        bio: bio
      })
    })
};

// Handle update on PUT.
exports.profile_update_put = (req, res) => {
  console.log("Route hit");
  // let nameId = req.params.name;
  //   let nameIdS = nameId.slice(1);
  // let data = req.body;
  // console.log(data);
  // Profile.findOneAndUpdate({name: nameIdS, data});
  // res.redirect('home');
};

