import { style, keyframes } from "@vanilla-extract/css"

export const section = style({
  position: "relative",
  backgroundPosition: "50%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  overflow: "hidden",
  paddingBottom: 120,
  paddingTop: 110,
  zIndex: 1,
  "::before": {
    background: "#030f27",
    position: "absolute",
    content: '""',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.7,
    zIndex: -1,
  },
  "@media": {
    "screen and (min-width: 992px) and (max-width: 1199px)": {
      paddingBottom: 100,
      paddingTop: 90,
    },
    "screen and (min-width: 768px) and (max-width: 991px)": {
      paddingBottom: 80,
      paddingTop: 70,
    },
    "screen and (max-width: 767px)": {
      paddingBottom: 60,
      paddingTop: 50,
    },
  },
})

export const sectionHeadingWrapper = style({
  textAlign: "center",
  marginBottom: -40,
  "@media": {
    "screen and (max-width: 767px)": {
      marginBottom: -30,
    },
  },
})

const decor1Anim = keyframes({
  "0%": { transform: "translateX(-5px)" },
  "50%": { transform: "translateX(5px)" },
  "100%": { transform: "translateX(-5px)" },
})

export const decor1 = style({
  animation: `${decor1Anim} 2s infinite ease-in-out`,
  position: "absolute",
  top: -30,
  right: 50,
})

const decor2Anim = keyframes({
  "0%": { transform: "rotate(90deg) translateX(-5px)" },
  "50%": { transform: "rotate(90deg) translateX(5px)" },
  "100%": { transform: "rotate(90deg) translateX(-5px)" },
})

export const decor2 = style({
  animation: `${decor2Anim} 2s infinite ease-in-out`,
  position: "absolute",
  transform: "",
  bottom: -100,
  left: -150,
})
