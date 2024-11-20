import { style } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"
import { bsMinMedia } from "components/utils/index.css"

export const heroWrapper = style({
  position: "relative",
  overflow: "hidden",
  alignItems: "center",
  backgroundPosition: "50%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundColor: "#000",
  display: "flex",
  padding: "50px 0",
  width: "100%",
  height: "100vh",
  zIndex: 9,
})

export const videoBackground = style({
  width: "100vw",
  height: "100vh",
  objectFit: "cover",
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: -1,
})

export const w100 = style({
  width: "100%",
})

export const subContainer = style([
  w100,
  {
    marginLeft: 0,
  },
])

export const introContent = style([
  w100,
  {
    position: "relative",
    margin: "0 auto",
    maxWidth: "760px",
    zIndex: 2,
    marginTop: 40,
    "@media": {
      [bsMinMedia.sm]: {
        marginTop: 40,
      },
    },
  },
])

export const title = style({
  color: theme.colors.white,
  fontSize: "2.5rem",
  lineHeight: 1.2,
  marginBottom: 20,
  marginTop: 0,
  fontWeight: 700,
  "@media": {
    [bsMinMedia.sm]: {
      fontSize: theme.fontSizes[7],
    },
    [bsMinMedia.lg]: {
      marginTop: 40,
    },
  },
})

export const titleHighlight = style({
  color: theme.colors.primary,
})

export const desc = style([
  w100,
  {
    margin: "0 auto",
    maxWidth: "700px",
  },
])

export const descParagraph = style({
  color: theme.colors.white,
  fontSize: "1.25rem",
  lineHeight: 1.67,
  marginBottom: 0,
  marginTop: 0,
  fontWeight: 500,
})

export const linkGroup = style({
  display: "inline-block",
})

export const primaryButton = style({
  display: "none",
  "@media": {
    "screen and (min-width: 768px)": {
      vars: {
        "--bs-btn-hover-border-color": "transparent",
        "--bs-btn-hover-bg": theme.colors.black,
        "--bs-btn-hover-color": theme.colors.white,
        "--bs-btn-bg": theme.colors.primary,
        "--bs-btn-border-color": theme.colors.primary,
      },
      margin: "60px 5px 0",
      alignItems: "center",
      borderRadius: 2,
      borderStyle: "solid",
      borderWidth: 1,
      cursor: "pointer",
      display: "inline-flex",
      fontSize: theme.fontSizes[2],
      fontWeight: 400,
      height: 52,
      justifyContent: "center",
      lineHeight: "50px",
      outline: "none",
      padding: "0 40px",
      whiteSpace: "nowrap",
      transition: theme.transition,
    },
  },
})

export const secondaryButton = style({
  vars: {
    "--bs-btn-bg": "transparent",
    "--bs-btn-hover-border-color": "transparent",
    "--bs-btn-border-color": theme.colors.white,
    "--bs-btn-color": theme.colors.white,
    "--bs-btn-hover-bg": theme.colors.primary,
    "--bs-btn-hover-color": theme.colors.white,
  },
  margin: "60px 5px 0",
  alignItems: "center",
  borderRadius: 2,
  borderStyle: "solid",
  borderWidth: 1,
  cursor: "pointer",
  display: "inline-flex",
  fontSize: theme.fontSizes[2],
  fontWeight: 400,
  height: 52,
  justifyContent: "center",
  lineHeight: "50px",
  outline: "none",
  padding: "0 40px",
  whiteSpace: "nowrap",
  transition: theme.transition,
})

export const overlay = style({
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  width: "100%",
  height: "100%",
  position: "absolute",
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 1,
})
