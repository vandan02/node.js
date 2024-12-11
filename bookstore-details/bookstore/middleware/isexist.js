const middleware = async(req, res, next) => {
   
    if (!req.body.title ||!req.body.author ||!req.body.category ||!req.body.publicationYear ||!req.body.price ||!req.body.quantity ||!req.body.description ||!req.body.imageUrl) 
        {
        return res.status(400).json({ message: "Missing required fields" });
    }
    next()
}

module.exports = middleware;