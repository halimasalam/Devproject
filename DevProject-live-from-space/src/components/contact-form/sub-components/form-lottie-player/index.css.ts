import { style } from "@vanilla-extract/css"

export const formLottie = style({
  position: "absolute",
  top: -15,
  right: 200,
  width: 80,
  height: 80,
  "@media": {
    "screen and (max-width: 1399px)": {
      right: 150,
    },
    "screen and (max-width: 1199px)": {
      right: 100,
    },
    "screen and (max-width: 991px)": {
      top: -25,
      right: 150,
    },
    "screen and (max-width: 767px)": {
      right: 50,
    },
    "screen and (max-width: 479px)": {
      top: -10,
      right: 10,
      width: 60,
      height: 60,
    },
  },
})
