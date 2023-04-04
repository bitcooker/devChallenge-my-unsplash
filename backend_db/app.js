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

app.get("/", async (req, res) => {
  // get all images
  const images = await Image.find()
  res.send(images)
})

app.post("/addImage", async (req, res) => {
  // add image to database
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

  res.send({ "error": "No label or imageUrl" })
})

app.post("/deleteImage", async (req, res) => {
  // delete an image from database if password is right
  const { password, id } = req.body
  if (password === "T") {
    const image = await Image.findOne({ _id: id })
    await Image.deleteOne(image)
    return res.send("deleted")
  }
  res.send("incorrect password")
})

app.listen(port || 5000, () => {
  console.log(`Listening on Port ${port || 5000}`)
})