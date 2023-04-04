import React from 'react'

const SingleImg = ({ img }) => {

  const showDeleteForm = (e, id) => {
    e.preventDefault()
  }

  return (
    <div className='position-relative img-item'>
      <img src={img.url} alt={img.label} />
      <div className="label position-absolute"
        onClick={(e) => showDeleteForm(e, img._id)}>{img.label}</div>
      <button className="btn delete-btn position-absolute">delete</button>
    </div>
  )
}

export default SingleImg
