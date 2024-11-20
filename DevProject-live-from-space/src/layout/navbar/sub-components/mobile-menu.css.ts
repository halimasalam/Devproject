import { style } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"

export const mobileMenuSection = style({
  background: "rgba(0, 0, 0, .7)",
  width: "100%",
  height: "100%",
  position: "fixed",
  transition: theme.transition,
  visibility: "hidden",
  left: 0,
  opacity: 0,
  top: 0,
  zIndex: 999999,
})

export const mobileMenuSectionActive = style({
  opacity: 1,
  visibility: "visible",
})

export const mobileMenuInner = style({
  backgroundAttachment: "scroll",
  backgroundColor: theme.colors.white,
  backgroundImage:
    "url(https://upload.wikimedia.org/wikipedia/commons/8/80/Backgorund.gif)",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  float: "right",
  height: "100%",
  position: "relative",
  WebkitTransform: "translateX(100%)",
  transform: "translateX(100%)",
  transition: theme.transition,
  width: 360,
  zIndex: 9,
  "::before": {
    backgroundColor: "rgba(0, 0, 0, .5)",
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    zIndex: -1,
  },
  "@media": {
    "screen and (max-width: 479px)": {
      width: "300px",
    },
  },
})

export const mobileMenuInnerActive = style({
  WebkitTransform: "translateX(0)",
  transform: "translateX(0)",
})

export const mobileMenuHeader = style({
  backgroundColor: theme.colors.heading,
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 15px 0 30px",
  height: 80,
})

export const mobileMenuCloseButton = style({
  transition: theme.transition,
  backgroundColor: "transparent",
  border: "none",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  padding: 0,
})

export const closeIcon = style({
  color: theme.colors.white,
  fontWeight: theme.fontWeights.bold,
  fontSize: 30,
})

export const mobileMenuContent = style({
  height: "calc(100% - 80px)",
  overflowY: "auto",
  padding: "20px 30px 100px",
})
