import React from 'react'

import { showOverlay } from '../utils'

const SingleImg = ({ img, handleOverlayType }) => {

  const showDeleteForm = (e, id) => {
    e.preventDefault()
  }

  return (
    <div className='position-relative img-item'>
      <img src={img.url} alt={img.label} />
      <div className="label position-absolute">{img.label}</div>
      <button className="btn delete-btn position-absolute"
        onClick={(e) => {
          handleOverlayType("delete")
          showOverlay()
        }}>
        delete
      </button>
    </div>
  )
}

export default SingleImg
