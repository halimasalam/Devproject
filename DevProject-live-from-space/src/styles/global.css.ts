import { globalStyle, globalKeyframes } from "@vanilla-extract/css"
import { theme } from "./theme.css"

globalStyle("body", {
  margin: 0,
  lineHeight: 1.74,
  fontFamily: theme.fonts.text,
  color: theme.colors.body,
  backgroundColor: theme.colors.background,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
})

globalStyle("*", {
  boxSizing: "border-box",
})

globalStyle(".no-scroll", {
  overflow: "hidden",
})

globalStyle(".icon-light svg path", {
  stroke: theme.colors.white,
})

globalStyle(".plain-page-container h1", {
  color: theme.colors.heading,
})

globalStyle(".plain-page-container p, .plain-page-container a", {
  color: theme.colors.lightText,
})

globalKeyframes("zoomInUp", {
  "0%": {
    transform: "scale(0.95) translateY(10px) translateX(-50%)",
    visibility: "hidden",
    opacity: 0,
  },
  "100%": {
    opacity: 1,
    transform: "scale(1), translateY(0) translateX(-50%)",
    visibility: "visible",
  },
})

globalKeyframes("zoomOutDown", {
  "0%": {
    transform: "scale(1) translateY(0) translateX(-50%)",
    opacity: 1,
  },
  "100%": {
    opacity: 0,
    transform: "scale(0.95) translateY(10px) translateX(-50%)",
    visibility: "hidden",
  },
})

globalKeyframes("fadeIn", {
  "0%": {
    visibility: "hidden",
    opacity: 0,
  },
  "100%": {
    opacity: 1,
    visibility: "visible",
  },
})

globalKeyframes("fadeOut", {
  "0%": {
    opacity: 1,
  },
  "100%": {
    opacity: 0,
    visibility: "hidden",
  },
})
