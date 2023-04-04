import React, { useContext, createContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [overlayType, setOverlayType] = useState("add");
  const [deleteId, setDeleteId] = useState(null);
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
        images,
        setImages,
        searchTerm,
        setSearchTerm,
      }}>
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export default useGlobalContext