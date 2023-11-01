const booksService = require("../services/books")

const addBook = async (req, res) => {
  const req_data = req.body
  const { data, error } = await booksService.addOne(req_data)
  if (data) res.status(201).json({ message: "Book added successfully :)" })
  else res.status(500).json({ error: "Unable to add book" })
}
const getBook = async (req, res) => {
  const bookId = req.params.id
  const { data, error } = await booksService.getpOne(bookId)
  if (data) res.status(200).json({ data: data })
  else res.status(500).json({ error: "Unable to get book" })
}
const getAllBooks = async (req, res) => {
  const { data, error } = await booksService.getAll()
  if (data) res.status(200).json({ data: data })
  else res.status(500).json({ error: "Unable to get books" })
}
const updateBook = async (req, res) => {
  const bookId = req.params.id
  const update_data = req.body
  const { data, error } = await booksService.updateOne(bookId, update_data)
  if (data) res.status(201).json({ data: "Book updated successfully" })
  else res.status(500).json({ error: "Unable to update book" })
}
const deleteBook = async (req, res) => {
  const bookId = req.params.id
  const { data, error } = await booksService.deleteOne(bookId)
  if (data) res.status(200).json({ data: "Book deleted successfully" })
  else res.status(500).json({ error: "Unable to delete book!" })
}

const booksHandler = {
  addBook,
  getAllBooks,
  getBook,
  updateBook,
  deleteBook
}

module.exports = booksHandler