import { style } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"

export const navSection = style({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
})

export const navList = style({
  display: "flex",
  flexWrap: "wrap",
  listStyle: "none",
  margin: 0,
  paddingLeft: 0,
})

export const navListItem = style({
  position: "relative",
})

export const navListItemLink = style({
  color: theme.colors.white,
  transition: theme.transition,
  textDecoration: "none",
  display: "block",
  fontSize: 16,
  fontWeight: 500,
  lineHeight: 1.375,
  padding: "40px 15px",
})

export const menuText = style({
  display: "flex",
  alignItems: "center",
})

export const menuDropdownIcon = style({
  fontSize: 12,
  marginLeft: 10,
})

export const subMenu = style({
  backgroundColor: theme.colors.white,
  borderRadius: 10,
  boxShadow: "0 2px 29px rgba(0, 0, 0, .05)",
  left: 0,
  listStyle: "none",
  marginBottom: 0,
  marginTop: 20,
  opacity: 0,
  padding: "18px 0",
  position: "absolute",
  top: "100%",
  transition: "all .4s ease .2s",
  visibility: "hidden",
  width: 250,
  zIndex: 9999,
  "::before": {
    borderColor: `transparent transparent ${theme.colors.white} transparent`,
    borderStyle: "solid",
    borderWidth: "0 7.5px 10px",
    content: '""',
    height: 0,
    left: 40,
    margin: "0 auto",
    position: "absolute",
    textAlign: "center",
    top: -10,
    width: 0,
  },
})

export const subMenuLink = style({
  color: theme.colors.body,
  transition: theme.transition,
  display: "block",
  fontSize: "1rem",
  fontWeight: 400,
  lineHeight: 1.375,
  padding: "8px 30px",
  whiteSpace: "nowrap",
  textDecoration: "none",
  ":hover": {
    color: "#111",
  },
})

export const showSubMenu = style({
  marginTop: 10,
  opacity: 1,
  visibility: "visible",
})
