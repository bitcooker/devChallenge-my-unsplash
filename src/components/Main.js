import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast'

import Layout from './MasonaryLayout'
import Spinner from './Spinner';
import useGlobalContext from '../context';

const Main = () => {

  const { images, setImages } = useGlobalContext()
  const { loading, setLoading } = useGlobalContext()

  const fetchImage = () => {
    // fetch all images from backend
    fetch("http://localhost:5000/")
      .then(res => res.json())
      .then(data => setImages(data))
      .catch(err => {
        console.log("error happened")
        console.log(err)
        toast("Error check server for images", {
          style: {
            border: "1px solid red",
            color: "red",
            fontWeight: "700",
            marginTop: "3rem"
          }
        })
      })
  }

  useEffect(() => {
    setLoading(true)
    fetchImage()
    setLoading(false)
  }, []);

  return (
    <main>
      <Toaster />
      {loading
        ? <Spinner message="Images are being loaded... please wait" />
        : <Layout images={images} />}

    </main>
  )
}

export default Main
