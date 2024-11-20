import React, { useEffect } from "react"
import * as styles from "./index.css"
import { Link } from "gatsby"
import { FaAngleDown } from "react-icons/fa"

interface SubItem {
  title: string
  link: string
}

export interface NavBarType {
  title: string
  link: string
  subItems: SubItem[]
}

interface NavBarProps {
  data: NavBarType[]
}

const NavBar = (props: NavBarProps) => {
  useEffect(() => {
    const allMenuWithChildren = document.querySelectorAll(".has-children")
    allMenuWithChildren.forEach((menu) => {
      menu.addEventListener("mouseenter", (e: Event) => {
        const element = e.target as Element
        element.lastElementChild.classList.add(`${styles.showSubMenu}`)
      })

      menu.addEventListener("mouseleave", (e: Event) => {
        const element = e.target as Element
        element.lastElementChild.classList.remove(`${styles.showSubMenu}`)
      })
    })
  }, [])

  return (
    <nav className={styles.navSection}>
      <ul className={styles.navList}>
        {props.data &&
          props.data.map((item) =>
            item.subItems ? (
              <li
                key={item.title}
                className={`${styles.navListItem} has-children`}
              >
                <Link to={item.link} className={styles.navListItemLink}>
                  <div className={styles.menuText}>
                    <span>{item.title}</span>
                    <FaAngleDown className={styles.menuDropdownIcon} />
                  </div>
                </Link>
                <ul className={styles.subMenu}>
                  {item.subItems.map((subItem) => (
                    <li key={subItem.title} className={styles.navListItem}>
                      <Link to={subItem.link} className={styles.subMenuLink}>
                        <span className={styles.menuText}>{subItem.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.title} className={styles.navListItem}>
                <Link to={item.link} className={styles.navListItemLink}>
                  <span className={styles.menuText}>{item.title}</span>
                </Link>
              </li>
            )
          )}
      </ul>
    </nav>
  )
}

export default NavBar
