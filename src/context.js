import React, { useContext, createContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [overlayType, setOverlayType] = useState("add");
  const [deleteId, setDeleteId] = useState(null);


  const handleOverlayType = (type) => {
    setOverlayType(type)
  }

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        overlayType,
        handleOverlayType,
        deleteId,
        setDeleteId,
      }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext