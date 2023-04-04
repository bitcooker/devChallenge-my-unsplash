const showOverlay = () => {
  // show overlay and add image form
  const body = document.querySelector("body")
  const overlay = document.querySelector(".overlay")

  body.style.overflow = "hidden"
  overlay.style.display = "flex"
}

export default showOverlay