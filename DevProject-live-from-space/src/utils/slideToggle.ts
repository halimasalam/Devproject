import slideDown from "./slideDown"
import slideUp from "./slideUp"

const slideToggle = (element: HTMLElement, duration = 500) => {
  if (window.getComputedStyle(element).display === "none") {
    return slideDown(element, duration)
  } else {
    return slideUp(element, duration)
  }
}

export default slideToggle
