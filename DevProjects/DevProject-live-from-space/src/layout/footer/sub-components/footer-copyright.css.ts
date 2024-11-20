import { style } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"

export const copyright = style({
  fontSize: theme.fontSizes[1],
  lineHeight: "25px",
  textAlign: "center",
  padding: "20px 15px",
  borderTop: `1px solid ${theme.colors.gray[200]}`,
  color: theme.colors.white,
  marginBottom: 0,
})
