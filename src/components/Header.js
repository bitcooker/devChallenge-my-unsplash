import React from 'react'

import { logo } from '../assets'

const Header = () => {
  return (
    <header className='app__header'>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">

          <div className="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </div>

          <form className='d-flex'>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                icon
              </span>
              <input type="text" className="form-control" placeholder="Search by name" aria-label="image name" aria-describedby="basic-addon1" />
            </div>

            <button className="btn">Add a photo</button>
          </form>

        </div>
      </nav>
    </header>
  )
}

export default Header
