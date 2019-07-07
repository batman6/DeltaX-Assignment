module.exports = (app) => {
    const movie = require('../controller/controller');

    app.post('/api/create',movie.createMovie);

    app.post('/api/create/actor',movie.createActor);

    app.get('/api/movie/getAll',movie.findAll);
    
    app.get('/api/movie/getAllShows',movie.findShows);
    
    app.get('/api/movie/getAllActors',movie.findActors);

    app.put('/api/movie/:id',movie.update);
}