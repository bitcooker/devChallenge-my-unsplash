import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

const GotoTop = () => {
  return (
    <div className='goto-top d-flex justify-content-center align-items-center'
      onClick={() => {
        window.scrollTo(0, 0)
      }}>
      <AiOutlineArrowUp className='arrow-up-icon' />
    </div>
  )
}

export default GotoTop
