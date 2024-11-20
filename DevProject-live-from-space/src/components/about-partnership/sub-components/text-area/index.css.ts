import { style } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"

export const title = style({
  color: theme.colors.heading,
  fontSize: "32px",
  lineHeight: "42px",
  margin: 0,
  marginBottom: 5,
})

export const titleTags = style({
  fontSize: theme.fontSizes[2],
  color: theme.colors.heading,
  backgroundColor: "rgb(18 146 238 / 0.2)",
  display: "inline-block",
  lineHeight: "24px",
  padding: "2px 6px",
  borderRadius: 5,
  marginBottom: 8,
  marginRight: 8,
})

export const description = style({
  fontSize: theme.fontSizes[2],
  color: theme.colors.subHeading,
  lineHeight: "24px",
  marginTop: 10,
  marginBottom: 0,
  maxWidth: 530,
  "@media": {
    "screen and (max-width: 991px)": {
      maxWidth: "100%",
    },
  },
})

export const icon = style({
  color: theme.colors.primary,
  fontSize: 15,
  marginRight: 20,
})

export const text = style({
  fontSize: theme.fontSizes[2],
  color: theme.colors.subHeading,
  lineHeight: "24px",
})

export const lottie = style({
  position: "absolute",
  bottom: -100,
  right: 0,
  width: 150,
  height: 150,
  zIndex: -1,
})
