const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserProfile = new Schema ({
    name: String,
    dateOfBirth: Date,
    bio: String,
    picture: String,
});

module.exports = Profile = mongoose.model('Profile', UserProfile);

