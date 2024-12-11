const mongoose = require('mongoose')

const booksschama=new mongoose.Schema({
    title: String,
    author: String,
    category: String,
    publicationYear: Number,
    price: Number,
    quantity: Number,
    description: String,
    imageUrl: String,
  }, { timestamps: true })

  let Books = mongoose.model('Books', booksschama)
  module.exports = Books
