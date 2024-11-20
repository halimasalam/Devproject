import { style } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"

export const customBtnHoverPrimary = style({
  vars: {
    "--bs-btn-hover-bg": theme.colors.primary,
    "--bs-btn-hover-color": theme.colors.white,
    "--bs-btn-hover-border-color": "transparent",
  },
})

export const customBtnLight = style({
  vars: {
    "--bs-btn-bg": theme.colors.white,
    "--bs-btn-border-color": theme.colors.white,
    "--bs-btn-color": theme.colors.primary,
  },
})

export const customBtn = style({
  alignItems: "center",
  borderRadius: 2,
  borderStyle: "solid",
  borderWidth: 1,
  cursor: "pointer",
  display: "inline-flex",
  fontSize: "1rem",
  fontWeight: 400,
  height: 52,
  justifyContent: "center",
  lineHeight: "50px",
  outline: "none",
  padding: "0 40px",
  whiteSpace: "nowrap",
})
