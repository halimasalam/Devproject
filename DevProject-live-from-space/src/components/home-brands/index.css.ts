import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"

export const section = style({
  backgroundColor: "#fff",
  overflowX: "hidden",
  paddingBottom: 100,
  paddingTop: 90,
  "@media": {
    "screen and (min-width: 768px) and (max-width: 991px)": {
      paddingBottom: 80,
      paddingTop: 75,
    },
    "screen and (max-width: 767px)": {
      paddingBottom: 60,
      paddingTop: 55,
    },
  },
})

export const logoImage = style({
  backgroundColor: theme.colors.white,
  transform: "scale(0.5)",
  boxShadow: "0 0 40px 0 rgba(51,51,51,.1)",
  padding: "10px 20px",
  borderRadius: 35,
  objectFit: "contain",
  width: 300,
  height: 200,
})

export const lottie = styleVariants({
  default: {
    position: "absolute",
    top: -50,
    right: 0,
    width: 150,
    height: 150,
    zIndex: -1,
    "@media": {
      "screen and (max-width: 991px)": {
        top: -50,
        width: 100,
        height: 100,
      },
    },
  },
  alt: {
    position: "absolute",
    top: -50,
    left: 0,
    width: 150,
    height: 150,
    zIndex: -1,
    "@media": {
      "screen and (max-width: 991px)": {
        top: -50,
        width: 100,
        height: 100,
      },
    },
  },
})
