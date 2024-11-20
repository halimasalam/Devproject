import { style } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"

export const sectionTitle = style({
  position: "relative",
  marginBottom: 30,
  zIndex: 99,
})

export const title = style({
  color: theme.colors.heading,
  fontSize: "32px",
  lineHeight: "42px",
  margin: "0",
})

export const description = style({
  fontSize: theme.fontSizes[2],
  color: theme.colors.subHeading,
  lineHeight: "24px",
  marginTop: 10,
  marginBottom: 0,
  maxWidth: 530,
})
