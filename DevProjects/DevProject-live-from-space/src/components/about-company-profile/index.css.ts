import { style } from "@vanilla-extract/css"

export const section = style({
  backgroundColor: "#fff",
  paddingBottom: 120,
  paddingTop: 100,
  "@media": {
    "screen and (min-width: 768px) and (max-width: 991px)": {
      paddingBottom: 100,
      paddingTop: 80,
    },
    "screen and (max-width: 767px)": {
      paddingBottom: 80,
      paddingTop: 60,
    },
  },
})
