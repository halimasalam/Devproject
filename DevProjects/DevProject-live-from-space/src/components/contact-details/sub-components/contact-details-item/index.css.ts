import { style } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"

export const contactInfo = style({
  backgroundColor: theme.colors.white,
  transition: theme.transition,
  boxShadow: "0 0 40px rgba(51,51,51,.1)",
  padding: "45px 30px 50px",
  display: "flex",
  alignItems: "flex-start",
  height: "100%",
  borderRadius: 5,
  "@media": {
    "screen and (max-width: 1199px)": {
      flexDirection: "column",
      padding: "25px 30px 30px",
      gap: 20,
    },
    "screen and (max-width: 767px)": {
      flexDirection: "row",
      padding: "25px 30px 30px",
      gap: 0,
    },
    "screen and (max-width: 379px)": {
      flexDirection: "column",
      padding: "25px 30px 30px",
      gap: 20,
    },
  },
})

export const icon = style({
  marginRight: 40,
  "@media": {
    "screen and (min-width: 992px) and (max-width: 1199px)": {
      marginRight: 20,
    },
    "screen and (max-width: 767px)": {
      marginBottom: 20,
      marginRight: 20,
    },
    "screen and (max-width: 479px)": {
      marginBottom: 0,
      marginRight: 30,
    },
  },
})

export const title = style({
  color: theme.colors.heading,
  fontSize: "1.25rem",
  fontWeight: 400,
  lineHeight: 1,
  marginBottom: 15,
})

export const text = style({
  fontSize: theme.fontSizes[1],
  color: theme.colors.lightText,
  lineHeight: "27px",
})

export const mb30 = style({
  marginBottom: 30,
})
