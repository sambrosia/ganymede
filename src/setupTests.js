// Mock rAF
window.requestAnimationFrame = callback => {
  setTimeout(callback, 1000 / 60)
}
