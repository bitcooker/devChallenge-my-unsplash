import React, { useRef } from 'react'

import ButtonHolder from './ButtonHolder'

const DeleteImage = ({ deleteId }) => {

  const passRef = useRef(null)
  const deleteImage = (e) => { }
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
