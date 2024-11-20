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
  marginBottom: 30,
  maxWidth: 530,
  "@media": {
    "screen and (max-width: 991px)": {
      maxWidth: "100%",
    },
  },
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
      bottom: -40,
    },
  },
})

export const submitBtn = style({
  vars: {
    "--bs-btn-hover-border-color": "transparent",
    "--bs-btn-hover-bg": theme.colors.black,
    "--bs-btn-hover-color": theme.colors.white,
    "--bs-btn-bg": theme.colors.primary,
    "--bs-btn-border-color": theme.colors.primary,
  },
  transition: theme.transition,
  fontSize: theme.fontSizes[2],
  alignItems: "center",
  borderStyle: "solid",
  cursor: "pointer",
  display: "inline-flex",
  justifyContent: "center",
  lineHeight: "50px",
  outline: "none",
  padding: "0 40px",
  whiteSpace: "nowrap",
  borderRadius: 2,
  borderWidth: 1,
  fontWeight: 400,
  height: 52,
})
