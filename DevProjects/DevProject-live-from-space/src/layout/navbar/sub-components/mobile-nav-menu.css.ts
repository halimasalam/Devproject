import { style } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"

export const mobileNavMenuList = style({
  listStyle: "none",
  margin: 0,
  paddingLeft: 0,
})

export const mobileNavMenuListItem = style({
  position: "relative",
})

export const mobileNavMenuListItemLink = style({
  color: "#fff !important",
  fontSize: theme.fontSizes[2],
  transition: theme.transition,
  borderBottom: "1px solid transparent",
  textDecoration: "none",
  display: "block",
  padding: "19px 0",
  fontWeight: 500,
  lineHeight: 1.5,
})

export const borderTop = style({
  borderTop: "1px solid hsla(0, 0%, 100%, .15)",
})

export const menuToggle = style({
  color: theme.colors.white,
  alignItems: "center",
  backgroundColor: "transparent",
  borderRadius: "50%",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  position: "absolute",
  top: 11,
  right: 0,
  width: 40,
  height: 40,
})

export const menuDropdownIcon = style({
  transition: theme.transition,
  fontSize: 18,
  lineHeight: 1,
})

export const subMenu = style({
  display: "none",
  listStyle: "none",
  margin: "14px 0",
  paddingLeft: 0,
})

export const subMenuListItem = style({
  position: "relative",
})

export const subMenuListItemLink = style({
  transition: theme.transition,
  textDecoration: "none",
  display: "block",
  color: "hsla(0, 0%, 100%, .7)",
  padding: "10px 0",
  fontSize: 15,
  fontWeight: 500,
  lineHeight: 1.5,
  ":hover": {
    color: theme.colors.white,
  },
})
