import { style } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"

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
  "@media": {
    "screen and (max-width: 991px)": {
      maxWidth: "100%",
    },
  },
})

export const servicesList = style({
  listStyle: "none",
  paddingLeft: 0,
})

export const servicesListItem = style({
  display: "flex",
  alignItems: "center",
  marginTop: 10,
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
  "@media": {
    "screen and (max-width: 991px)": {
      bottom: 50,
    },
  },
})
