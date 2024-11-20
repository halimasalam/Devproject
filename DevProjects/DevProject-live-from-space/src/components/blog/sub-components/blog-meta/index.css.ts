import { style } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"

export const blogMetaList = style({
  fontSize: theme.fontSizes[1],
  display: "flex",
  alignItems: "center",
  flexWrap: "wrap",
  lineHeight: "27px",
  listStyle: "none",
  marginBottom: 30,
  marginRight: -28,
  paddingLeft: 0,
  "@media": {
    "screen and (max-width: 767px)": {
      marginBottom: 15,
    },
  },
})

export const blogMetaListItem = style({
  color: theme.colors.lightText,
  display: "flex",
  alignItems: "center",
  marginRight: 28,
})

export const icon = style({
  color: theme.colors.primary,
  marginRight: 10,
})

export const mt60 = style({
  marginTop: 60,
  marginBottom: 0,
})
