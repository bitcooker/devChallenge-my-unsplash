import React from 'react'
import { Circles } from 'react-loader-spinner'

const Spinner = ({ message }) => {
  return (
    <div className='spinner d-flex align-items-center flex-column justify-content-center h-100 w-100'>
      <Circles
        color="#00BFFF"
        height={50}
        width={200}
        className="m-5" />
      <p className='text-center px-2 mt-3'>{message}</p>
    </div>
  )
}

export default Spinner