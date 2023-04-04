import React, { useRef } from 'react'
import { SlMagnifier } from 'react-icons/sl'

import { logo } from '../assets'
import { showOverlay } from '../utils'
import useGlobalContext from '../context'

const Header = () => {

  const { handleOverlayType, setSearchTerm } = useGlobalContext()
  const searchRef = useRef(null)
  const searchImage = (e) => {
    e.preventDefault()
    setSearchTerm(searchRef.current.value)
  }

  return (
    <header className='app__header'>
      <nav className="navbar navbar-light">
        <div className="d-flex w-100">

          <div className="navbar-brand" href="#">
            <img src={logo} alt="logo" />
          </div>

          <form className='d-flex'
            onSubmit={(e) => searchImage(e)}>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon1">
                <SlMagnifier className='search-icon' />
              </span>
              <input type="text" className="form-control" placeholder="Search by name" aria-label="image name" aria-describedby="basic-addon1" ref={searchRef} />
            </div>
          </form>

          <button className="btn"
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
