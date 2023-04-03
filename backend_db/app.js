const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = 5000

mongoose.connect(process.env.MONGOOSE_URI)
  .then(() => {
    console.log("Mongoose connected");
  })
  .catch(err => {
    console.log("error happened")
  })

app.post("/addImage", (req, res) => {
  const { label, imageUrl } = req.body
  console.log(req.body)
  res.json({ name: "me", age: "26" })
})

app.listen(port || 5000, () => {
  console.log(`Listening on Port ${port || 5000}`)
})