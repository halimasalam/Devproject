import React from "react"
import * as styles from "./mobile-nav-menu.css"
import { Link } from "gatsby"
import { getClosestNode, getSiblingNodes, slideToggle, slideUp } from "utils"
import { FaAngleDown } from "react-icons/fa"
import { NavBarType } from ".."

interface MobileNavMenuProps {
  data: NavBarType[]
}

const MobileNavMenu = (props: MobileNavMenuProps) => {
  const onClickHandler = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement
    const parentElement = target.parentElement
    if (
      parentElement?.classList.contains("menu-toggle") ||
      target.classList.contains("menu-toggle")
    ) {
      const element = target.classList.contains("icon") ? parentElement : target
      const parent = getClosestNode(element, "li")
      const childNodes = parent.childNodes
      const parentSiblings = getSiblingNodes(parent)
      parentSiblings.forEach((sibling) => {
        const sibChildNodes = sibling.childNodes
        sibChildNodes.forEach((child) => {
          if (child.nodeName === "UL") {
            slideUp(child as HTMLElement, 1000)
          }
        })
      })
      childNodes.forEach((child) => {
        if (child.nodeName === "UL") {
          slideToggle(child as HTMLElement, 1000)
        }
      })
    }
  }

  return (
    <nav>
      <ul className={styles.mobileNavMenuList}>
        {props.data &&
          props.data.map((item) =>
            item.subItems ? (
              <li key={item.title} className={styles.mobileNavMenuListItem}>
                <Link
                  to={item.link}
                  className={`${styles.mobileNavMenuListItemLink} ${styles.borderTop}`}
                >
                  <span className="menu-text">{item.title}</span>
                </Link>
                <span
                  className={`${styles.menuToggle} menu-toggle`}
                  onClick={onClickHandler}
                >
                  <FaAngleDown className={styles.menuDropdownIcon} />
                </span>
                <ul className={styles.subMenu}>
                  {item.subItems.map((subItem) => (
                    <li key={subItem.title} className={styles.subMenuListItem}>
                      <Link
                        to={subItem.link}
                        className={styles.subMenuListItemLink}
                      >
                        <span className="menu-text">{subItem.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.title} className={styles.mobileNavMenuListItem}>
                <Link
                  to={item.link}
                  className={`${styles.mobileNavMenuListItemLink} ${styles.borderTop}`}
                >
                  <span className="menu-text">{item.title}</span>
                </Link>
              </li>
            )
          )}
      </ul>
    </nav>
  )
}

export default MobileNavMenu
