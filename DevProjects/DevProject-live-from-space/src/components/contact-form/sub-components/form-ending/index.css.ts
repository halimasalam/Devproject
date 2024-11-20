import { style } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"

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

export const mb30 = style({
  marginBottom: 30,
})
