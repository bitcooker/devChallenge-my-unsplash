const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const cors = require("cors")

const app = express()

const Image = require("./schema/imageSchema")

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

app.post("/addImage", async (req, res) => {
  const { label, imageUrl } = req.body
  let savedImage
  if (label && imageUrl) {
    const image = new Image({
      label,
      url: imageUrl
    })

    savedImage = await image.save()
    return res.send(savedImage)
  }

  res.send("error")
})

app.listen(port || 5000, () => {
  console.log(`Listening on Port ${port || 5000}`)
})