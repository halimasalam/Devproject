import { style } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"

export const errorText = style({
  color: theme.colors.lightText,
  fontSize: theme.fontSizes[2],
  marginBottom: 0,
  fontWeight: 400,
})

export const mb30 = style({
  marginBottom: 30,
})
