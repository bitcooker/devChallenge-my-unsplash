import React from 'react'

import { hideOverlay } from '../utils'

const ButtonHolder = ({ type }) => {
  return (
    <div className="btn-holder d-flex justify-content-end">
      <button className="btn cancel-btn me-2"
        onClick={(e) => hideOverlay(e)}>Cancel</button>
      <button className={`btn ${type === "delete" ? "delete-btn" : "add-btn"}`}>{type ? "Delete" : "Submit"}</button>
    </div>
  )
}

export default ButtonHolder
