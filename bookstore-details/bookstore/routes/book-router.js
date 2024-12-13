const { Router} = require("express");
const { getboockbyid, deletebook, allbook, createBook, updatebook } = require("../controller/books.controller");
const middleware = require("../middleware/isexist");
const { bookfilter } = require("../controller/books.controller");

const bookRouter = Router();

bookRouter.get('/books/book/:id',getboockbyid)
bookRouter.delete('/book/delete/:id',deletebook)
bookRouter.get('/books',allbook)
bookRouter.post('/books/addbooks',middleware,createBook)
bookRouter.patch('/books/update/:id',updatebook)
bookRouter.get('/books/filter',bookfilter)

module.exports = bookRouter