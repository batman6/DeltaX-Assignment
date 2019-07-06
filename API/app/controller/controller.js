const Actor = require('../model/actor.model');
const Movie = require('../model/movie.model');

exports.createMovie = (req, res) => {
    const movie = new Movie({
        name:  req.body.name, 
        year: req.body.year,
        bio: req.body.bio
    });
    movie.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Movie."
        });
    });
};

exports.createActor = (req, res) => {
    const actor = new Actor({
        name:  req.body.name, 
        sex: req.body.sex,
        dob: req.body.dob,
        bio: req.body.bio
    });
    actor.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Actor."
        });
    });
};

exports.findAll = (req, res) => {
    Movie.find({type:"Movie"})
    .then(movie => {
        res.json(movie);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred."
        });
    });
};

exports.findShows = (req, res) => {
    Movie.find({type:"Show"})
    .then(movie => {
        res.json(movie);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred."
        });
    });
};

exports.findActors = (req, res) => {
    Actor.find()
    .then(actor => {
        res.json(actor);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred."
        });
    });
};

exports.findOne = (req, res)=> {

};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};