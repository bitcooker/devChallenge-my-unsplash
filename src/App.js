import React, { useState } from 'react'

import Header from './components/Header'
import Main from './components/Main'
import Overlay from './components/Overlay'

const App = () => {
  const [overlayType, setOverlayType] = useState("add");

  const handleOverlayType = (type) => {
    setOverlayType(type)
  }

  return (
    <div>
      <Header handleOverlayType={handleOverlayType} />
      <Main handleOverlayType={handleOverlayType} />
      <Overlay type={overlayType} />
    </div >
  )
}

export default App
