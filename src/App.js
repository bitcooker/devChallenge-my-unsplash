import React, { useState } from 'react'

import Header from './components/Header'
import Main from './components/Main'
import Overlay from './components/Overlay'

const App = () => {
  const [overlayType, setOverlayType] = useState("add");
  const [deleteId, setDeleteId] = useState(null);

  const handleOverlayType = (type, id) => {
    if (id) {
      setDeleteId(id)
    }
    setOverlayType(type)
  }

  return (
    <div>
      <Header handleOverlayType={handleOverlayType} />
      <Main handleOverlayType={handleOverlayType} />
      <Overlay type={overlayType} deleteId={deleteId} />
    </div >
  )
}

export default App
