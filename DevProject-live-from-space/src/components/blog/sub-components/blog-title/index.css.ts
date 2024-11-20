import { style } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"

export const blogTitleLink = style({
  textDecoration: "none",
})

export const blogTitle = style({
  color: theme.colors.heading,
  textDecoration: "none",
  lineHeight: "44px",
  fontSize: "32px",
  fontWeight: 600,
  margin: 0,
  marginBottom: 30,
})
