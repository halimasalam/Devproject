import { style } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"
import { linkBase } from "../index.css"

export const footerSocialInline = style({
  display: "flex",
  flexWrap: "wrap",
  marginBottom: -10,
  marginRight: -10,
  marginTop: 40,
})

export const footerSocialInlineLink = style([
  linkBase,
  {
    display: "block",
    lineHeight: 1,
    fontSize: theme.fontSizes[4],
    color: theme.colors.gray[100],
    marginBottom: 10,
    marginRight: 10,
  },
])
