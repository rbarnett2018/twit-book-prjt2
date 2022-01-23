const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserProfile = new Schema ({
    name: String,
    birthday: Date,
    bio: String,
});

module.exports = Profile = mongoose.model('Profile', UserProfile, "Profiles");

