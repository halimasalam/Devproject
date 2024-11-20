import { styleVariants } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"

export const blogText = styleVariants({
  truncate: {
    color: theme.colors.lightText,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 3 /* number of lines to show */,
    lineClamp: 3,
    WebkitBoxOrient: "vertical",
    lineBreak: "loose",
    margin: 0,
    maxHeight: 90,
  },
  full: {
    color: theme.colors.lightText,
    margin: 0,
  },
})
