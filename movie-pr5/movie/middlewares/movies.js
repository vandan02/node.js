const validMovie = (req, res, next) => {
    const { title, description, releaseDate, category, actors, image } = req.body;
 
    if (!title || !description || !releaseDate || !category || !actors || !image) {
      return res.status(400).json({ error: "All fields are required" });
    }
  
    next();
  };
  
  module.exports = validMovie;
  