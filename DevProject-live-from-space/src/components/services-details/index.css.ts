import { style } from "@vanilla-extract/css"

export const servicesDetailsSection = style({
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

export const mbNe30 = style({
  marginBottom: -30,
})
