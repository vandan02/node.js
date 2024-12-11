const { Router} = require("express");
const { getboockbyid, deletebook, allbook, createBook, updatebook } = require("../controller/books.controller");
const middleware = require("../middleware/isexist");
const { bookfilter } = require("../controller/books.controller");

const router = Router();

router.get('/books/book/:id',getboockbyid)
router.delete('/book/delete/:id',deletebook)
router.get('/books',allbook)
router.post('/books/addbooks',middleware,createBook)
router.patch('/books/update/:id',updatebook)
router.get('/books/filter',bookfilter)