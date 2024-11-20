import { style } from "@vanilla-extract/css"

export const videoModal = style({
  backgroundColor: "rgba(0,0,0,.5)",
  cursor: "pointer",
  height: "100%",
  position: "fixed",
  transition: "opacity .3s ease-out",
  width: "100%",
  top: 0,
  left: 0,
  opacity: 1,
  zIndex: 1000000,
})

export const videoModalBody = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  margin: "0 auto",
  padding: "0 10px",
  maxWidth: 960,
})

export const videoModalInner = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  "@media": {
    "(orientation: landscape)": {
      boxSizing: "border-box",
      padding: "10px 60px",
    },
  },
})

export const videoWrapper = style({
  backgroundColor: "#333",
  position: "relative",
  paddingBottom: "56.25%",
  WebkitTransform: "translate(0)",
  transform: "translate(0)",
  transition: "transform .3s ease-out,-webkit-transform .3s ease-out",
  width: "100%",
  height: 0,
})

export const videoBackground = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
  top: 0,
  left: 0,
})

export const closeButton = style({
  background: "transparent",
  border: "none",
  display: "inline-block",
  position: "absolute",
  top: -64,
  right: -12,
  zIndex: 2,
  "@media": {
    "(orientation: landscape)": {
      top: -12,
      right: -64,
    },
  },
})

export const closeIcon = style({
  color: "#fff",
  fontSize: 48,
})
