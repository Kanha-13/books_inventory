const validateaddRequest = async (req, res, next) => {
  const data = req.body
  if (!data.title) res.status(400).json({ error: "Book title required" })
  else if (!data.author) res.status(400).json({ error: "Book author required" })
  else if (!data.summary) res.status(400).json({ error: "Book summary required" })
  else next()
}

const validateupdateRequest = async (req, res, next) => {
  const bookId = req.params.id
  const body_size = Object.keys(req.body)
  if (!bookId) res.status(400).json({ error: "Book id missing!" })
  else if (body_size < 1) res.status(400).json({ error: "empty body request" })
  else next()
}
const validatedeleteRequest = async (req, res, next) => {
  const bookId = req.params.id
  if (!bookId) res.status(400).json({ error: "Book id missing!" })
  else next()
}

const validategetrequest = async (req, res, next) => {
  const bookId = req.params.id
  if (!bookId) res.status(400).json({ error: "Book id missing!" })
  else next()
}

module.exports = { validateaddRequest, validategetrequest, validateupdateRequest, validatedeleteRequest }