const Movie = require("../Models/movie.schema");
const getMovie = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

const createMovie = async (req, res) => {
  try {
    let movie = await Movie.create(req.body)
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json(error);
  }
}

const updateMovie = async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatedMovie);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
const deleteMovie = async (req, res) => {
  let {id}=req.params
    try {
      await Movie.findByIdAndDelete(id);
      res.status(200).json({ message: "Movie deleted successfully" });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  };

const addRating = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    movie.ratings.push(req.body);
    await movie.save();
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};

const addComment = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    movie.comments.push(req.body);
    await movie.save();
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};


const filterMovies = async (req, res) => {
  try {
    const { title, addedBy, releaseDate, category } = req.query;
    const filter = {};
    if (title) filter.title = title;
    if (addedBy) filter.addedBy = addedBy;
    if (releaseDate) filter.releaseDate = releaseDate;
    if (category) filter.category = category;

    const movies = await Movie.find(filter);

    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
};



module.exports = {
  getMovie,
  createMovie,
  updateMovie,
  deleteMovie,
  addRating,
  addComment,
  filterMovies,
}