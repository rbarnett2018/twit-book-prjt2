const { db } = require('../model/profile-model');
const Profile = require('../model/profile-model');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
// ROUTE HANDLER CALLBACK FUNCTIONS


// Display delete form on GET.
exports.profile_delete_get = (req, res) => {
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
    res.render('delete-names', {
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

// Handle delete on POST.
exports.profile_delete_post = (req, res) => {
    let nameId = req.params.name;
    
    

   db.collection('Profiles').deleteOne({name: nameId})
   .then( () => {
    res.render('home');
})
.catch(err => {
    res.status(400).send(`Unable to delete ${nameId}`);
    console.log(err);
});
};
    


