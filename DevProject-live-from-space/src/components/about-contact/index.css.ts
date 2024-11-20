import { style } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"

export const section = style({
  backgroundColor: "#f8faff",
  paddingBottom: 250,
  paddingTop: 250,
  "@media": {
    "screen and (min-width: 768px) and (max-width: 991px)": {
      paddingBottom: 180,
      paddingTop: 180,
    },
    "screen and (max-width: 767px)": {
      paddingBottom: 160,
      paddingTop: 160,
    },
  },
})

export const container = style({
  position: "relative",
  zIndex: 9,
})

export const contactBtn = style({
  vars: {
    "--bs-btn-hover-border-color": "transparent",
    "--bs-btn-hover-bg": theme.colors.black,
    "--bs-btn-hover-color": theme.colors.white,
    "--bs-btn-bg": theme.colors.primary,
    "--bs-btn-border-color": theme.colors.primary,
  },
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

export const maxW690 = style({
  maxWidth: 690,
})
