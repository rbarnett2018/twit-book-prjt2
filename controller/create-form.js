const express = require('express');
const app = express();
const Profile = require('../model/profile-model');
const bodyParser=require("body-parser");
const db = require('../model/db');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(bodyParser.urlencoded({ extended: false }));
// ROUTE HANDLER CALLBACK FUNCTIONS

// Display create form on GET.
exports.profile_create_get = (req, res) => {
    res.render('create-form');
};

// Handle create on POST.
exports.profile_create_post = (req, res) => {
    console.log('Hitting post');
 const newProfile = new Profile(req.body);
 console.log(req.body);
 newProfile.save()
 .then( () => {
     res.render('home');
 })
 .catch(err => {
     res.status(400).send('Unable to save to database');
     console.log(err);
 });
};
 

