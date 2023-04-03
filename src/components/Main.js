import React, { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

import Layout from './MasonaryLayout'

const Main = () => {

  const [images, setImages] = useState([]);

  const fetchImage = () => {
    // fetch all images from backend
    fetch("http://localhost:5000/")
      .then(res => res.json())
      .then(data => setImages(data))
      .catch(err => {
        console.log("error happened")
        console.log(err)
      })
  }

  useEffect(() => {
    fetchImage()
  }, []);

  return (
    <main>
      <Toaster />
      <Layout imgs={images}></Layout>
    </main>
  )
}

export default Main
