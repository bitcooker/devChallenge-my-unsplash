import React from 'react'

import { showOverlay } from '../utils'
import useGlobalContext from '../context'

const SingleImg = ({ img }) => {

  const { handleOverlayType, setDeleteId } = useGlobalContext()
  return (
    <div className='position-relative img-item'>
      <img src={img.url} alt={img.label} />
      <div className="label position-absolute">{img.label}</div>
      <button className="btn delete-img position-absolute"
        onClick={(e) => {
          handleOverlayType("delete")
          setDeleteId(img._id)
          showOverlay()
        }}>
        delete
      </button>
    </div>
  )
}

export default SingleImg
