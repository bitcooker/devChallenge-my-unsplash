const mongoose = require("mongoose")
require("dotenv").config()

const Image = require("./schema/imageSchema")

console.log(process.env["MONGOOSE_URI"])

mongoose.connect(process.env.MONGOOSE_URI)
  .then(() => {
    console.log("Mongoose connected");
  })
  .catch(err => {
    console.log("error happened")
  })

const getRandomLabel = () => {
  const labels = ["coding", "science", "space", "monster", "nature", "technology", "celebrity", "planet", "anime", "movie", "animal",
    "butterfly", "beauty"]
  const randInt = Math.floor(Math.random() * labels.length)
  return labels[randInt]
}

const addNImage = async (n = 30) => {
  await Image.deleteMany({})
  for (let i = 0; i < n; i++) {
    let label = getRandomLabel()
    let imageUrl = `https://source.unsplash.com/random/?${label}&${i}`
    const image = new Image({
      label,
      url: imageUrl,
      uploadDate: new Date(),
    })

    await image.save()
  }
  console.log("done")
}

addNImage()