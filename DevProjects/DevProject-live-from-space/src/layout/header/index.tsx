import React, { useState, useEffect, useRef } from "react"
import * as styles from "./index.css"
import { graphql, useStaticQuery } from "gatsby"
import Logo from "components/common/logo"
import NavBar, { NavBarType } from "layout/navbar"
import NavButton from "layout/navbar/sub-components/nav-button"
import MobileMenu from "layout/navbar/sub-components/mobile-menu"
import { RiMenu5Fill } from "react-icons/ri"
import { Image } from "types/custom"
import MobileNavMenu from "layout/navbar/sub-components/mobile-nav-menu"

interface LayoutHeaderData {
  title: string
  logo: Image
  navBar: NavBarType[]
  ctaButtonText: string
  ctaButtonLink: string
}

interface LayoutHeader {
  layoutHeader: LayoutHeaderData
}

const Header = () => {
  const { layoutHeader } = useStaticQuery<LayoutHeader>(query)
  const headerRef = useRef<HTMLElement>()
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [scroll, setScroll] = useState(0)
  const [headerTop, setHeaderTop] = useState(0)

  const handleToggleMobileMenu = () => setShowMobileMenu((prev) => !prev)

  const handleScroll = () => setScroll(window.scrollY)

  useEffect(() => {
    const header = headerRef.current
    setHeaderTop(header.offsetTop)
    globalThis.addEventListener("scroll", handleScroll)

    return () => {
      globalThis.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <header ref={headerRef} className={styles.headerSection}>
        <div
          className={`${styles.headerInner} ${
            scroll > headerTop ? styles.headerInnerSticky : ""
          }`}
        >
          <div className="container position-relative">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-2 col-auto order-0">
                <Logo src={layoutHeader.logo.url} alt={layoutHeader.logo.alt} />
              </div>
              <div className="col-auto col-xl d-flex align-items-center justify-content-xl-center justify-content-end order-2 order-xl-1">
                <div className="menu-column-area d-none d-xl-block position-static">
                  <NavBar data={layoutHeader.navBar} />
                </div>
                <div
                  className={`${styles.headerMobileMenuToggle} d-xl-none ms-sm-2`}
                >
                  <button
                    type="button"
                    className={styles.headerMobileMenuToggleButton}
                    onClick={handleToggleMobileMenu}
                  >
                    <RiMenu5Fill className={styles.hamburgerIcon} />
                  </button>
                </div>
              </div>
              <div className="col-xl-2 col d-none d-sm-flex justify-content-end order-1 order-xl-2">
                <NavButton
                  text={layoutHeader.ctaButtonText}
                  link={layoutHeader.ctaButtonLink}
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu
        logo={layoutHeader.logo}
        show={showMobileMenu}
        onClose={handleToggleMobileMenu}
        navMenu={<MobileNavMenu data={layoutHeader.navBar} />}
      />
    </>
  )
}

export default Header

const query = graphql`
  query LayoutHeader {
    layoutHeader {
      title
      logo {
        id
        url
        alt
      }
      navBar {
        title
        link
        subItems {
          title
          link
        }
      }
      ctaButtonText
      ctaButtonLink
    }
  }
`
