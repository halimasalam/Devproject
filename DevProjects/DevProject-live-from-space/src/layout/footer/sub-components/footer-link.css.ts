import { style } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"

export const footerWidgetTitle = style({
  color: theme.colors.white,
  fontSize: theme.fontSizes[3],
  marginBottom: 17,
})

export const footerWidgetContentList = style({
  listStyle: "none",
  marginBottom: -5,
  marginRight: -20,
  paddingLeft: 0,
})
