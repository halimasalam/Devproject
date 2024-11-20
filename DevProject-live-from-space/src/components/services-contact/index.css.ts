import { style } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"

export const section = style({
  position: "relative",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  paddingBottom: 100,
  paddingTop: 100,
  zIndex: 1,
  "::before": {
    background: "#030f27",
    position: "absolute",
    content: '""',
    opacity: 0.7,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
  },
  "@media": {
    "screen and (min-width: 768px) and (max-width: 991px)": {
      paddingBottom: 80,
      paddingTop: 80,
    },
    "screen and (max-width: 767px)": {
      paddingBottom: 60,
      paddingTop: 60,
    },
  },
})

export const contactInfo = style({
  "@media": {
    "screen and (min-width: 1200px)": {
      marginRight: 35,
    },
  },
})

export const contactFormWrapper = style({
  marginTop: 40,
  "@media": {
    "screen and (min-width: 992px)": {
      marginTop: 0,
    },
    "screen and (min-width: 768px)": {
      marginTop: 50,
    },
  },
})

export const contactFormArea = style({
  backgroundColor: theme.colors.white,
  position: "relative",
  padding: "70px 50px",
  borderRadius: 10,
  "@media": {
    "screen and (min-width: 992px) and (max-width: 1199px)": {
      padding: "50px 30px",
    },
    "screen and (max-width: 479px)": {
      padding: "30px 20px",
    },
  },
})

export const lottie = style({
  position: "absolute",
  top: 0,
  left: 50,
  width: 1000,
  height: 400,
  "@media": {
    "screen and (min-width: 768px) and (max-width: 1199px)": {
      width: 700,
    },
    "screen and (max-width: 767px)": {
      width: 400,
      left: 20,
    },
    "screen and (max-width: 479px)": {
      width: 300,
      height: 200,
    },
  },
})
