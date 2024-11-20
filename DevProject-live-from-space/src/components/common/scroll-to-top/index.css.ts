import { style, keyframes } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"

const bounce = keyframes({
  "0%": { transform: "translateY(-2px)" },
  "50%": { transform: "translateY(2px)" },
  "100%": { transform: "translateY(-2px)" },
})

export const bounceLoop = style({
  animation: `${bounce} 2s infinite ease-in-out`,
})

export const scrollTop = style({
  backgroundColor: theme.colors.primary,
  backgroundPosition: 0,
  backgroundSize: "200% auto",
  border: 0,
  borderRadius: "50%",
  bottom: -60,
  boxShadow: "0 30px 50px rgb(0 0 0 / 3%)",
  color: theme.colors.white,
  cursor: "pointer",
  display: "block",
  fontSize: 25,
  height: 60,
  lineHeight: "60px",
  opacity: 0,
  overflow: "hidden",
  padding: 0,
  position: "fixed",
  right: 30,
  textAlign: "center",
  transition: theme.transition,
  visibility: "hidden",
  width: 60,
  zIndex: 999,
  selectors: {
    "&:hover": {
      backgroundPosition: "100%",
    },
  },
})

export const show = style({
  bottom: "60px",
  opacity: "1",
  visibility: "visible",
})
