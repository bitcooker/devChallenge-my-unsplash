const mongoose = require('mongoose')

const ImageSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true,
  },
  uploadDate: {
    type: Date,
    required: true
  }
})

const Image = mongoose.model("Image", ImageSchema)

module.exports = Image

