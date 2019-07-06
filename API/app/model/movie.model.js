const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    name: String,
    date: Number,
    plot: String,
    cast: Array,
    poster: String
}, {
    timestamps: false,
    versionKey: false
});

module.exports = mongoose.model('Movie', movieSchema, 'Movies');