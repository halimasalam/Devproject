import { style, createVar } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"

const beforeWidthVar = createVar()

export const bannerWrapper = style({
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  position: "relative",
  paddingTop: 100,
  height: 530,
  zIndex: 9,
  "::before": {
    content: '""',
    background: "#030f27",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
    opacity: 0.7,
  },
  "@media": {
    "screen and (min-width: 992px) and (max-width: 1599px)": {
      height: 400,
    },
  },
})

export const title = style({
  color: theme.colors.white,
  textAlign: "center",
  fontSize: "1.75rem",
  lineHeight: 1.2,
  margin: "0 auto",
  fontWeight: 700,
  "@media": {
    "screen and (max-width: 767px)": {
      fontSize: "1.5rem",
      lineHeight: 1.5,
    },
    "screen and (min-width: 768px) and (max-width: 991px)": {
      fontSize: "2.125rem",
    },
    "screen and (min-width: 992px) and (max-width: 1199px)": {
      fontSize: "2.625rem",
    },
  },
})

export const breadcrumbList = style({
  backgroundColor: "transparent",
  padding: "40px 0",
  marginBottom: 0,
})

export const breadcrumbItem = style({
  color: theme.colors.white,
  fontSize: theme.fontSizes[3],
  display: "flex",
  lineHeight: 1.5,
})

export const breadcrumbItemLink = style({
  vars: {
    [beforeWidthVar]: "0",
  },
  color: theme.colors.white,
  transition: theme.transition,
  display: "block",
  position: "relative",
  textDecoration: "none",
  ":hover": {
    vars: {
      [beforeWidthVar]: "100%",
    },
    color: theme.colors.primary,
  },
  "::before": {
    backgroundColor: theme.colors.primary,
    transition: theme.transition,
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    height: 2,
    width: beforeWidthVar,
  },
})

export const breadcrumbDivider = style({
  margin: "2px 16px 0",
  color: theme.colors.white,
  fontSize: theme.fontSizes[1],
})
