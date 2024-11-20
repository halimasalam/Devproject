import React from "react"
import * as styles from "./nav-button.css"
import { Link } from "gatsby"

interface NavButtonProps {
  text: string
  link: string
}

const NavButton = ({ text, link }: NavButtonProps) => {
  const currentHash = typeof window !== "undefined" && window.location.hash
  const newText = currentHash === "#explore" ? "Exit Scene" : text
  const newLink = currentHash === "#explore" ? "/" : link

  return (
    <Link
      to={newLink}
      className={`${styles.customBtn} ${styles.customBtnLight} ${styles.customBtnHoverPrimary} btn btn-light`}
    >
      {newText}
    </Link>
  )
}

export default NavButton
