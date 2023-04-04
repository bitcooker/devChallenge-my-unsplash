const hideOverlay = (e) => {
  // hide overlay 
  e.preventDefault()
  e.stopPropagation()

  const body = document.querySelector("body")
  const overlay = document.querySelector(".overlay")

  body.style.overflow = "visible"
  overlay.style.display = "none"
}

export default hideOverlay