import { style } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"
import { media, bsMinMedia } from "components/utils/index.css"

export const linkBase = style({
  textDecoration: "none",
  transition: theme.transition,
  selectors: {
    "&:hover": {
      color: theme.colors.primary,
    },
  },
})

export const footerSection = style({
  width: "100%",
  backgroundColor: theme.colors.dark,
  padding: "100px 0px 0px",
  overflow: "hidden",
  position: "relative",
  "@media": {
    [media.tablet]: {
      padding: "80px 0px 0px",
    },
    [media.largeMobile]: {
      padding: "60px 0px 0px",
    },
  },
})

export const footerLottieBackground = style({
  position: "absolute",
  top: 20,
  right: 0,
  width: 200,
  height: 200,
  "@media": {
    [bsMinMedia.sm]: {
      top: "initial",
      bottom: 20,
      right: 20,
    },
  },
})

export const footerRowWrapper = style({
  marginBottom: 30,
  "@media": {
    [bsMinMedia.md]: {
      marginBottom: 50,
    },
    [bsMinMedia.lg]: {
      marginBottom: 70,
    },
  },
})

export const footerColWrapper = style({
  marginBottom: 30,
})

export const footerLogo = style({
  marginBottom: 30,
})

export const footerWidgetContent = style({
  color: theme.colors.gray[100],
  fontSize: theme.fontSizes[3],
  fontWeight: theme.fontWeights.medium,
})
