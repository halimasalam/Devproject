import { style } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"

const formField = style({
  transition: theme.transition,
  backgroundColor: "#f5f5f5",
  color: "#748494",
  outline: "none",
  width: "100%",
  border: "1px solid #f5f5f5",
  borderRadius: 5,
})

export const input = style([
  formField,
  {
    padding: "3px 20px",
    minHeight: 56,
  },
])

export const textarea = style([
  formField,
  {
    resize: "none",
    padding: "10px 20px",
    minHeight: 130,
  },
])

