import * as React from "react"
import "../styles/global.css"
import { Slice } from "gatsby"

interface LayoutProps {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Slice alias="header" />
      <main>{children}</main>
      <Slice alias="footer" />
      <Slice alias="scroll-to-top" />
    </>
  )
}

export default Layout
