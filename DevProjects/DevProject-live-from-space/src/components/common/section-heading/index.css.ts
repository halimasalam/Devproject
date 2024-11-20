import { style } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"

export const sectionTitle = style({
  position: "relative",
  textAlign: "center",
  marginBottom: 40,
  zIndex: 99,
  "@media": {
    "screen and (max-width: 767px)": {
      marginBottom: 30,
    },
  },
})

export const title = style({
  fontSize: "2rem",
  lineHeight: "44px",
  fontWeight: 600,
  margin: "0 auto",
  textAlign: "center",
  maxWidth: 750,
  "@media": {
    "screen and (min-width: 768px) and (max-width: 991px)": {
      fontSize: "1.625rem",
      lineHeight: "32px",
    },
    "screen and (max-width: 767px)": {
      fontSize: "1.5rem",
      lineHeight: "30px",
      maxWidth: "100%",
    },
    "screen and (max-width: 479px)": {
      fontSize: "1.625rem",
    },
  },
})

export const subTitle = style({
  fontSize: theme.fontSizes[3],
  display: "block",
  lineHeight: "24px",
  margin: "20px auto 0",
  maxWidth: 530,
  "@media": {
    "screen and (max-width: 479px)": {
      fontSize: theme.fontSizes[2],
    },
  },
})
