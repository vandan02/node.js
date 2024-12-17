const middleware = async(req, res, next) => {
   
    if (!req.body.username ||!req.body.email ||!req.body.password ) 
        {
        return res.status(400).json({ message: "all fields are required" });
    }
    next()
}

module.exports = middleware;