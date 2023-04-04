import React from 'react'

import AddImage from './AddImage'
import DeleteImage from './DeleteImage'

const Overlay = ({ type = "add", deleteId }) => {
  return (
    <div className='overlay'>
      <div className="image-form bg-white p-4">
        {type === "add" && <AddImage />}
        {type === "delete" && <DeleteImage deleteId={deleteId} />}
      </div>
    </div>
  )
}

export default Overlay
