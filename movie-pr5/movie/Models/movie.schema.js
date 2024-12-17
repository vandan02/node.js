const mongoose = require('mongoose');

let moviesschama=new mongoose.Schema({
   title:String,
    description:String,
    releaseDate:String,
    category:String,
    actors: [{ name: String }],
    image:String,
    ratings: [
      {
        value: { type: Number, min: 0, max: 10 },
      },
    ],
    comments: [
      {
        text: String,
      },
    ],
    addedBy: String,})

    let Movie=mongoose.model('Movie',moviesschama)
    module.exports=Movie;