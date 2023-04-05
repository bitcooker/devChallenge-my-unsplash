import React, { useRef } from 'react'
import toast from 'react-hot-toast'

import { hideOverlay } from '../utils'
import ButtonHolder from './ButtonHolder'

const AddImage = () => {

  const labelRef = useRef(null)
  const imageUrlRef = useRef(null)

  const addImage = async (e) => {
    const addImageUrl = process.env.NODE_ENV !== "production"
      ? "http://localhost:5000/addImage"
      : "/addImage"

    await fetch(addImageUrl, {
      method: "POST",
      body: JSON.stringify({
        label: labelRef.current.value,
        imageUrl: imageUrlRef.current.value
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        toast("Image Added...")
        window.location.reload();
      })
      .catch(err => {
        toast("Error...")
        console.log(err)
      })

    hideOverlay(e)
  }

  return (
    <>
      <h2>Add a new photo</h2>
      <form onSubmit={(e) => addImage(e)}>
        <div className="mb-3">
          <label htmlFor="label" className="form-label">Label</label>
          <input type="text" className="form-control" id="label" aria-describedby="image label"
            placeholder='e.g. car, wild ...' name="label"
            ref={labelRef} />
        </div>
        <div className="mb-3">
          <label htmlFor="photoUrl" className="form-label">Photo URL</label>
          <input type="text" className="form-control" id="photoUrl" placeholder='e.g. https://source.unsplash.com/random/'
            name="photoUrl"
            ref={imageUrlRef} />
        </div>
        <ButtonHolder />
      </form>
    </>
  )
}

export default AddImage
