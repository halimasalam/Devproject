import { style } from "@vanilla-extract/css"

export const imageArea = style({
  height: "100%",
  position: "relative",
  zIndex: 9,
  marginRight: 0,
})

export const image = style({
  boxShadow: "0 .25rem .5rem rgba(0,0,0,.05),0 1.5rem 2.2rem rgba(0,0,0,.1)",
  transition: "all 1.5s cubic-bezier(0,0,.2,1)",
  borderRadius: 5,
})

export const col = style({
  marginBottom: 30,
  "@media": {
    "screen and (max-width: 991px)": {
      marginTop: 30,
    },
  },
})