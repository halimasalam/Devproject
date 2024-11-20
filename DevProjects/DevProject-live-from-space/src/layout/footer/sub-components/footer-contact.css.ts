import { style } from "@vanilla-extract/css"
import { linkBase } from "../index.css"

export const footerWidgetContentParagraph = style({
  marginBottom: 5,
})

export const footerWidgetContentLink = style([
  linkBase,
  {
    color: "inherit",
    cursor: "pointer",
    display: "inline-block",
    lineHeight: "inherit",
  },
])
