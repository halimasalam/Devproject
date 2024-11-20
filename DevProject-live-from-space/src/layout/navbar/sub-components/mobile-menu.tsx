import React from "react"
import * as styles from "./mobile-menu.css"
import Logo from "components/common/logo"
import MobileNavMenu from "./mobile-nav-menu"
import { RiCloseFill } from "react-icons/ri"
import { Image } from "types/custom"

interface MobileMenuProps {
  logo: Image
  show: boolean
  onClose: () => void
  navMenu: JSX.Element
}

const MobileMenu = ({ logo, show, onClose, navMenu }: MobileMenuProps) => {
  return (
    <div
      className={`${styles.mobileMenuSection} ${
        show ? styles.mobileMenuSectionActive : ""
      }`}
    >
      <div
        className={`${styles.mobileMenuInner} ${
          show ? styles.mobileMenuInnerActive : ""
        }`}
      >
        <div className={styles.mobileMenuHeader}>
          <Logo src={logo.url} alt={logo.alt} />
          <button className={styles.mobileMenuCloseButton} onClick={onClose}>
            <RiCloseFill className={styles.closeIcon} />
          </button>
        </div>
        <div className={styles.mobileMenuContent}>{navMenu}</div>
      </div>
    </div>
  )
}

export default MobileMenu
