import { style } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"

export const section = style({
  backgroundColor: "#fff",
  overflow: "hidden",
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

export const blog = style({
  transition: theme.transition,
  borderBottom: "1px solid #f3f3f3",
  height: "100%",
  marginBottom: 50,
  paddingBottom: 50,
})

export const blogContentWrapper = style({
  paddingTop: 30,
})

export const readMoreBtn = style([
  { marginTop: 30 },
  {
    vars: {
      "--bs-btn-hover-border-color": "transparent",
      "--bs-btn-hover-bg": theme.colors.black,
      "--bs-btn-hover-color": theme.colors.white,
      "--bs-btn-bg": theme.colors.primary,
      "--bs-btn-border-color": theme.colors.primary,
    },
    transition: theme.transition,
    fontSize: theme.fontSizes[2],
    alignItems: "center",
    borderStyle: "solid",
    cursor: "pointer",
    display: "inline-flex",
    justifyContent: "center",
    lineHeight: "50px",
    outline: "none",
    padding: "0 40px",
    whiteSpace: "nowrap",
    borderRadius: 2,
    borderWidth: 1,
    fontWeight: 400,
    height: 52,
  },
])

export const mb30 = style({
  marginBottom: 30,
})

export const mb50 = style({
  marginBottom: 50,
})
