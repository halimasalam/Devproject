import "@fontsource/jost"
import "@fontsource/jost/300.css"
import "@fontsource/jost/500.css"
import "@fontsource/jost/600.css"
import "@fontsource/jost/700.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const onRouteUpdate = ({ location, prevLocation }) => {
  if (!prevLocation || location.pathname === prevLocation.pathname) return
  if (typeof window !== "undefined") {
    if (!location.hash) return setTimeout(() => window.scrollTo(0, 0), 100)
    const section = document?.querySelector(location.hash)
    setTimeout(() => {
      if (section) section.scrollIntoView()
      else window.scrollTo(0, 0)
    }, 100)
  }
}
