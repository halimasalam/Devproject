import { style, styleVariants } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"

export const contactFormSection = styleVariants({
  main: {
    backgroundColor: "#f8faff",
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
  },
  alt: {
    backgroundColor: theme.colors.white,
  },
})

export const mbNe30 = style({
  marginBottom: -30,
})
