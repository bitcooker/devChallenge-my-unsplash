import React, { useRef } from 'react'
import toast from 'react-hot-toast'

import ButtonHolder from './ButtonHolder'
import { hideOverlay } from '../utils'

const DeleteImage = ({ deleteId }) => {

  const passRef = useRef(null)
  const deleteImage = async (e) => {
    e.preventDefault()
    e.stopPropagation()

    const deleteImageUrl = process.env.NODE_ENV !== "production"
      ? "http://localhost:5000/deleteImage"
      : "/deleteImage"

    await fetch(deleteImageUrl, {
      method: "POST",
      body: JSON.stringify({
        password: passRef.current.value,
        id: deleteId
      }),
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(res => res.text())
      .then(data => {
        if (data === "deleted") {
          toast("Successfully Deleted Image...")
          window.location.reload();
        } else {
          toast("Invalid Password...")
        }
      })
      .catch(err => {
        toast("Error")
        console.log(err)
      })
    hideOverlay(e)
  }
  return (
    <>
      <h2>Are you sure?</h2>
      <form onSubmit={(e) => deleteImage(e)}>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="text" className="form-control" id="password" aria-describedby="delete password"
            name="password"
            ref={passRef} />
        </div>
        <ButtonHolder type="delete" />
      </form>
    </>
  )
}

export default DeleteImage
