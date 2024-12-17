const {Router}=require('express')
const { getMovie, filterMovies, createMovie, updateMovie, deleteMovie, addRating, addComment } = require('../controllers/movies.contoller')
const validMovie = require('../middlewares/movies')


const routes = Router()

routes.get('/movie',getMovie)
routes.get('/movie/filter',filterMovies)
routes.post('/movie/create',validMovie,createMovie)
routes.patch("/update/:id",updateMovie)
routes.delete("/delete/:id",deleteMovie)
routes.patch("/rating/:id", addRating);
routes.patch("/comment/:id", addComment);

module.exports = routes;
