const { addBook, updateBook, getAllBooks, getBook, deleteBook } = require("../controllers/books");
const { validateaddRequest, validategetrequest, validateupdateRequest, validatedeleteRequest } = require("../middlewares/request_validate")

const router = require("express").Router()

router.get("/books", getAllBooks)

router.get("/book/:id", validategetrequest, getBook)
router.post("/book", validateaddRequest, addBook)
router.patch("/book/:id", validateupdateRequest, updateBook)
router.delete("/book/:id", validatedeleteRequest, deleteBook)

module.exports = router;