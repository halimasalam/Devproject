import { style } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"
import { linkBase } from "../index.css"

export const footerWidgetContentListItem = style({
  marginBottom: 5,
  paddingRight: 20,
})

export const footerWidgetContentListItemLink = style([
  linkBase,
  {
    color: "inherit",
    fontSize: theme.fontSizes[2],
    lineHeight: "30px",
  },
])
