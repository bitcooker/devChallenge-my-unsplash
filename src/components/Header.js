import React, { useState, useEffect } from 'react'
import { SlMagnifier } from 'react-icons/sl'

import { logo } from '../assets'
import { showOverlay } from '../utils'

const Header = ({ handleOverlayType }) => {

  return (
    <header className='app__header'>
      <nav className="navbar navbar-light bg-light">
        <div className="d-flex justify-content-start w-100">

          <div className="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </div>

          <form className='d-flex justify-content-between'>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                <SlMagnifier className='search-icon' />
              </span>
              <input type="text" className="form-control" placeholder="Search by name" aria-label="image name" aria-describedby="basic-addon1" />
            </div>
          </form>

          <button className="btn ms-auto"
            onClick={() => {
              handleOverlayType("add")
              showOverlay()
            }}>
            Add a photo
          </button>

        </div>
      </nav>
    </header>
  )
}

export default Header
