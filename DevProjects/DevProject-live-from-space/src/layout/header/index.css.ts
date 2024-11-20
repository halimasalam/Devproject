import { style, keyframes } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"

const headerSlideDown = keyframes({
  "0%": {
    WebkitTransform: "translateY(-100%)",
    transform: "translateY(-100%)",
  },
  "100%": {
    WebkitTransform: "translateY(0)",
    transform: "translateY(0)",
  },
})

export const headerSection = style({
  borderBottom: `1px solid ${theme.colors.halfWhite}`,
  position: "absolute",
  width: "100%",
  minHeight: 100,
  zIndex: 9999,
  left: 0,
  top: 0,
})

export const headerInner = style({
  display: "flex",
  alignItems: "center",
  backgroundColor: "transparent",
  minHeight: 100,
})

export const headerInnerSticky = style({
  WebkitAnimation: `${headerSlideDown} .95s ease forwards`,
  animation: `${headerSlideDown} .95s ease forwards`,
  backgroundColor: "#030e22",
  boxShadow: "0 8px 20px 0 rgba(0, 0, 0, .1)",
  position: "fixed",
  width: "100%",
  height: 80,
  left: 0,
  top: 0,
})

export const headerMobileMenuToggle = style({
  padding: "0 10px",
  "@media": {
    "screen and (max-width: 479px)": {
      padding: "0 8px",
    },
  },
})

export const headerMobileMenuToggleButton = style({
  backgroundColor: "transparent",
  border: "none",
  display: "flex",
  flexDirection: "column",
  padding: 0,
})

export const hamburgerIcon = style({
  color: theme.colors.white,
  fontWeight: theme.fontWeights.bold,
  fontSize: 30,
})
