import { style } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"

export const wrapper = style({
  transition: theme.transition,
  marginBottom: 30,
  ":hover": {
    WebkitTransform: "translateY(-5px)",
    transform: "translateY(-5px)",
  },
})

export const container = style({
  backgroundColor: theme.colors.white,
  transition: theme.transition,
  border: "1px solid #e7e7e7",
  display: "block",
  padding: "50px 60px",
  position: "relative",
  height: "100%",
  zIndex: 99,
  borderRadius: 5,
  ":hover": {
    borderColor: theme.colors.white,
    boxShadow: "0 0 40px rgba(51,51,51,.1)",
    zIndex: 1,
  },
  "@media": {
    "screen and (min-width: 992px) and (max-width: 1199px)": {
      padding: "30px 35px",
    },
    "screen and (max-width: 767px)": {
      padding: "20px 25px",
    },
  },
})

export const icon = style({
  marginBottom: 35,
  "@media": {
    "screen and (min-width: 992px) and (max-width: 1199px)": {
      marginRight: 20,
    },
    "screen and (max-width: 767px)": {
      marginBottom: 20,
    },
  },
})

export const title = style({
  color: theme.colors.heading,
  fontSize: "1.25rem",
  fontWeight: 700,
  lineHeight: 1,
  margin: 0,
})

export const description = style({
  fontSize: theme.fontSizes[1],
  color: theme.colors.lightText,
  lineHeight: 1.6,
  marginTop: 25,
  marginBottom: 0,
  "@media": {
    "screen and (min-width: 992px) and (max-width: 1199px)": {
      marginTop: 20,
    },
    "screen and (max-width: 767px)": {
      marginTop: 20,
    },
  },
})

export const link = style({
  color: theme.colors.primary,
  fontSize: theme.fontSizes[2],
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  fontWeight: 400,
  lineHeight: 1,
  marginTop: 35,
  "@media": {
    "screen and (min-width: 992px) and (max-width: 1199px)": {
      marginTop: 20,
    },
    "screen and (max-width: 767px)": {
      marginTop: 20,
    },
  },
})
