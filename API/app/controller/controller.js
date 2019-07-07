const Actor = require('../model/actor.model');
const Movie = require('../model/movie.model');

exports.createMovie = (req, res) => {
    const movie = new Movie({
        name:  req.body.name, 
        year: req.body.year,
        plot: req.body.plot,
        cast: req.body.cast.name,
        poster: req.body.poster,
        type: req.body.type
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

exports.update = (req, res) => {
    if(!req.body.plot || !req.body.year || !req.body.poster || !req.body.type) {
        return res.status(400).send({
            message: "Movie plot/year/poster/type can not be empty"
        });
    }
    Movie.findByIdAndUpdate(req.params._id, {
        name: req.body.name || "Untitled Movie",
        plot: req.body.plot
    }, {new: true})
    .then(movie => {
        if(!movie) {
            return res.status(404).send({
                message: "Movie not found with id " + req.params.id
            });
        }
        res.send(movie);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Movie not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error updating movie with id " + req.params.id
        });
    });
};