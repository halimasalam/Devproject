import { style } from "@vanilla-extract/css"

export const blogImageWrapper = style({
  position: "relative",
  overflow: "hidden",
  borderRadius: 5,
})

export const blogImage = style({
  transition: "all 1.5s cubic-bezier(0,0,.2,1)",
  width: "100%",
  ":hover": {
    transform: "scale(1.1)",
  },
})
