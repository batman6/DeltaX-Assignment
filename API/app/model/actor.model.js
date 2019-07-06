const mongoose = require('mongoose');

const actorSchema = mongoose.Schema({
    name: String,
    sex: String,
    dob: String,
    bio: String
}, {
    timestamps: false,
    versionKey: false
});

module.exports = mongoose.model('Movies', actorSchema, 'Actors');