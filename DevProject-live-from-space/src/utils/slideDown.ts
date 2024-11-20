const slideDown = (element: HTMLElement, duration = 500) => {
  return new Promise(function () {
    element.style.removeProperty("display")
    let display = window.getComputedStyle(element).display

    if (display === "none") display = "block"

    element.style.display = display
    const height = element.offsetHeight
    element.style.overflow = "hidden"
    element.style.height = "0"
    element.style.paddingTop = "0"
    element.style.paddingBottom = "0"
    element.style.marginTop = "0"
    element.style.marginBottom = "0"
    element.offsetHeight
    element.style.transitionProperty = "height, margin, padding"
    element.style.transitionDuration = `${duration}ms`
    element.style.height = `${height}px`
    element.style.removeProperty("padding-top")
    element.style.removeProperty("padding-bottom")
    element.style.removeProperty("margin-top")
    element.style.removeProperty("margin-bottom")
    globalThis.setTimeout(function () {
      element.style.removeProperty("height")
      element.style.removeProperty("overflow")
      element.style.removeProperty("transition-duration")
      element.style.removeProperty("transition-property")
    }, duration)
  })
}

export default slideDown
