const mongoose = require('mongoose')

export const ImageSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true,
  }
})

export const Image = mongoose.model("Image", ImageSchema)

