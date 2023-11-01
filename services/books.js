const Books = require("../models/books")

const addOne = async (data) => {
  try {
    const res = await Books.create(data)
    return { data: res, error: null }
  } catch (error) {
    return { data: null, error: error }
  }

}
const getAll = async () => {
  try {
    const res = await Books.find({}).limit(100)//can change as per requirement
    return { data: res, error: null }
  } catch (error) {
    return { data: null, error: error }
  }
}
const getpOne = async (id) => {
  try {
    const res = await Books.findById(id)
    return { data: res, error: null }
  } catch (error) {
    return { data: null, error: error }
  }
}
const updateOne = async (id, data) => {
  try {
    const res = await Books.findByIdAndUpdate(id, data)
    return { data: res, error: null }
  } catch (error) {
    return { data: null, error: error }
  }
}
const deleteOne = async (id) => {
  try {
    const res = await Books.findByIdAndDelete(id)
    return { data: res, error: null }
  } catch (error) {
    return { data: null, error: error }
  }
}

const booksService = {
  addOne,
  getAll,
  getpOne,
  updateOne,
  deleteOne
}

module.exports = booksService