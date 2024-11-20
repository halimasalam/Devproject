import { style } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"

export const contactInfoItem = style({
  transition: theme.transition,
  backgroundColor: "transparent",
  borderBottom: "1px solid #fff",
  padding: "25px 0",
  display: "flex",
  alignItems: "flex-start",
  borderRadius: 0,
  ":last-child": {
    borderBottom: 0,
    paddingBottom: 0,
  },
  "@media": {
    "screen and (max-width: 767px)": {
      flexDirection: "column",
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
      marginBottom: 15,
      marginRight: 30,
    },
  },
})

export const title = style({
  color: theme.colors.white,
  fontSize: "1.25rem",
  fontWeight: 400,
  lineHeight: 1,
  marginBottom: 15,
})

export const text = style({
  fontSize: theme.fontSizes[1],
  color: theme.colors.white,
  lineHeight: "27px",
})
