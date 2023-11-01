const express = require("express")
const connect = require("./DB/connect")
const app = express()
require("dotenv").config()
const PORT = process.env.PORT
const MONGO_URI = process.env.MONGO_URI
const bodyParser = require('body-parser');
const book_routes = require("./routes/books")

//middlewares
app.use(bodyParser.json());

//db connect
connect(MONGO_URI)

//endpoints
app.get("/", (_, res) => res.send("Hello client :)"))
app.use(book_routes)

app.listen(PORT, () => console.log(`Listening at ${PORT}`))


