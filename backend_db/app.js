const express = require("express")
const mongoose = require("mongoose")
const path = require('path');
require('dotenv').config({ path: require('find-config')('.env') })
const cors = require("cors")

const app = express()

const Image = require("./schema/imageSchema")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = 5000

console.log(process.env.MONGOOSE_URI)
mongoose.connect(process.env.MONGOOSE_URI)
  .then(() => {
    console.log("Mongoose connected");
  })
  .catch(err => {
    console.log("error happened")
  })

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../build')));


app.get("/", async (req, res) => {
  // get all images
  const images = await Image.find().sort({ field: "asc", uploadDate: -1 })
  res.send(images)
})

app.post("/addImage", async (req, res) => {
  // add image to database
  const { label, imageUrl } = req.body
  let savedImage
  if (label && imageUrl) {
    const image = new Image({
      label,
      url: imageUrl,
      uploadDate: new Date(),
    })

    savedImage = await image.save()
    return res.send(savedImage)
  }

  res.send({ "error": "No label or imageUrl" })
})

app.post("/deleteImage", async (req, res) => {
  // delete an image from database if password is right
  const { password, id } = req.body
  let deletePass = process.env.DELETE_PASSWORD || "password"
  if (password === deletePass) {
    const image = await Image.findOne({ _id: id })
    await Image.deleteOne(image)
    return res.send("deleted")
  }
  res.send("incorrect password")
})

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

app.listen(port || 5000, () => {
  console.log(`Listening on Port ${port || 5000}`)
})