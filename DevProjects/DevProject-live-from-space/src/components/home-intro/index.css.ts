import { style } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"

export const section = style({
  backgroundColor: "#fff",
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

export const videoPopupArea = style({
  position: "relative",
  zIndex: 9,
})

export const videoThumbnail = style({
  display: "block",
  margin: "auto",
  overflow: "hidden",
  position: "relative",
  width: "100%",
  borderRadius: 5,
  zIndex: 9,
})

export const thumbnailImage = style({
  transition: "all 1.5s cubic-bezier(0,0,.2,1)",
  width: "100%",
  ":hover": {
    transform: "scale(1.1)",
  },
})

export const buttonIcon = style({
  transition: theme.transition,
  backgroundColor: "hsla(0,0%,100%,.8)",
  borderRadius: "50%",
  top: "50%",
  left: "50%",
  lineHeight: "90px",
  position: "absolute",
  textAlign: "center",
  WebkitTransform: "translate(-50%,-50%)",
  transform: "translate(-50%,-50%)",
  width: 90,
  height: 90,
  border: 0,
  zIndex: 9,
})

export const icon = style({
  color: theme.colors.primary,
  fontSize: 24,
  fontWeight: 900,
})

export const lottie = style({
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
})
