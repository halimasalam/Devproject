import { style, keyframes } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"

const upDown = keyframes({
  "50%": { transform: "translateY(30px)" },
})

export const logoWrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  height: 96,
  width: 96,
  zIndex: -1,
  "@media": {
    "screen and (min-width: 768px) and (max-width: 991px)": {
      height: 60,
      width: 60,
    },
    "screen and (max-width: 767px)": {
      height: 50,
      width: 50,
    },
  },
})

export const logo1 = style({
  animation: `${upDown} 4s ease-in-out infinite`,
  left: 300,
  top: -170,
  "@media": {
    "screen and (min-width: 992px) and (max-width: 1199px)": {
      left: 300,
      top: -170,
    },
    "screen and (min-width: 768px) and (max-width: 991px)": {
      left: 150,
      top: -115,
    },
    "screen and (max-width: 767px)": {
      left: 70,
      top: -110,
    },
  },
})

export const logo2 = style({
  animation: `${upDown} 4.5s ease-in-out infinite`,
  right: 400,
  top: -150,
  "@media": {
    "screen and (min-width: 992px) and (max-width: 1199px)": {
      right: 250,
      top: -150,
    },
    "screen and (min-width: 768px) and (max-width: 991px)": {
      display: "none",
      right: 150,
      top: -115,
    },
    "screen and (max-width: 767px)": {
      display: "none",
      right: 90,
      top: -110,
    },
  },
})

export const logo3 = style({
  animation: `${upDown} 5s ease-in-out infinite`,
  left: 15,
  top: -55,
  "@media": {
    "screen and (min-width: 992px) and (max-width: 1199px)": {
      left: 50,
      top: -55,
    },
    "screen and (min-width: 768px) and (max-width: 991px)": {
      display: "none",
      left: 15,
      top: -80,
    },
    "screen and (max-width: 767px)": {
      display: "none",
      left: 15,
      top: -80,
    },
  },
})

export const logo4 = style({
  animation: `${upDown} 5.5s ease-in-out infinite`,
  right: 15,
  top: -55,
  "@media": {
    "screen and (min-width: 992px) and (max-width: 1199px)": {
      right: 50,
      top: -55,
    },
    "screen and (min-width: 768px) and (max-width: 991px)": {
      right: 150,
      top: -115,
    },
    "screen and (max-width: 767px)": {
      right: 55,
      top: -100,
    },
  },
})

export const logo5 = style({
  animation: `${upDown} 6s ease-in-out infinite`,
  bottom: -80,
  left: 200,
  "@media": {
    "screen and (min-width: 992px) and (max-width: 1199px)": {
      bottom: -80,
      left: 120,
    },
    "screen and (min-width: 768px) and (max-width: 991px)": {
      bottom: -80,
      left: 80,
    },
    "screen and (max-width: 767px)": {
      bottom: -80,
      left: 60,
    },
  },
})

export const logo6 = style({
  animation: `${upDown} 6.5s ease-in-out infinite`,
  bottom: -30,
  right: 300,
  "@media": {
    "screen and (min-width: 992px) and (max-width: 1199px)": {
      bottom: -30,
      right: 230,
    },
    "screen and (min-width: 768px) and (max-width: 991px)": {
      display: "none",
      bottom: 30,
      right: 150,
    },
    "screen and (max-width: 767px)": {
      display: "none",
      bottom: 0,
      right: 90,
    },
  },
})

export const logo7 = style({
  animation: `${upDown} 7s ease-in-out infinite`,
  bottom: -155,
  right: 80,
  "@media": {
    "screen and (min-width: 992px) and (max-width: 1199px)": {
      bottom: -125,
      right: 60,
    },
    "screen and (min-width: 768px) and (max-width: 991px)": {
      bottom: -70,
      right: 70,
    },
    "screen and (max-width: 767px)": {
      bottom: -70,
      right: 50,
    },
  },
})

export const logoImage = style({
  backgroundColor: theme.colors.white,
  transform: "scale(0.3)",
  boxShadow: "0 0 40px 0 rgba(51,51,51,.1)",
  padding: "30px 60px",
  borderRadius: 35,
  "@media": {
    "screen and (max-width: 767px)": {
      transform: "scale(0.2)",
    },
  },
})
