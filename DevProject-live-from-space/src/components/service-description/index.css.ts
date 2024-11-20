import { style } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"

export const section = style({
  paddingBottom: 100,
  paddingTop: 100,
  "@media": {
    "screen and (min-width: 768px) and (max-width: 991px)": {
      paddingBottom: 80,
      paddingTop: 80,
    },
    "screen and (max-width: 767px)": {
      paddingBottom: 60,
      paddingTop: 60,
    },
  },
})

export const serviceName = style({
  color: theme.colors.heading,
  fontSize: "calc(1.3rem + 0.6vw)",
  marginBottom: "0.5rem",
  fontWeight: 700,
  lineHeight: 1.3,
  marginTop: 0,
  "@media": {
    "screen and (min-width: 1200px)": {
      fontSize: "1.75rem",
    },
  },
})

export const serviceDescription = style({
  color: theme.colors.lightText,
  margin: 0,
})
