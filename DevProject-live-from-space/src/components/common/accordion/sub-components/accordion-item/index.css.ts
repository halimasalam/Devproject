import { style } from "@vanilla-extract/css"
import { theme } from "styles/theme.css"

export const accordionItem = style({
  backgroundColor: "#f8faff",
  color: theme.colors.black,
  transition: "all .3s cubic-bezier(.645,.045,.355,1)",
  border: "1px solid #e7e7e7",
  borderRadius: 5,
  marginBottom: 30,
  ":last-child": {
    marginBottom: 0,
  },
})

export const accordionTitle = style({
  backgroundColor: "#f8faff",
  color: theme.colors.heading,
  fontSize: theme.fontSizes[2],
  WebkitAppearance: "none",
  border: "1px solid #eee",
  position: "relative",
  display: "block",
  lineHeight: "24px",
  margin: "-1px -1px 0",
  padding: "20px 26px",
  cursor: "pointer",
  borderBottom: 0,
  borderRadius: 5,
  fontWeight: 400,
})

export const accordionIcon = style({
  position: "absolute",
  WebkitTransform: "translateY(-50%)",
  transform: "translateY(-50%)",
  top: "50%",
  right: 15,
})

export const accordionContent = style({
  backgroundColor: "#f8faff",
  transition: "all .3s cubic-bezier(.645,.045,.355,1)",
  borderTop: "2px solid #e7e7e7",
  borderRadius: "0 0 5px 5px",
  display: "none",
  // border: 0,
})

export const content = style({
  fontSize: theme.fontSizes[2],
  display: "inline-block",
  padding: "10px 25px 30px",
  fontWeight: 400,
  lineHeight: 1.74,
})
