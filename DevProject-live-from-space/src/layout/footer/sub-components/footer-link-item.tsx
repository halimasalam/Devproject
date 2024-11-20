import React from "react"
import * as styles from "./footer-link-item.css"
import { Link } from "gatsby"

interface FooterLinkItemProps {
  title: string
  link: string
}

const FooterLinkItem = (props: FooterLinkItemProps) => {
  return (
    <li className={styles.footerWidgetContentListItem}>
      <Link to={props.link} className={styles.footerWidgetContentListItemLink}>
        {props.title}
      </Link>
    </li>
  )
}

export default FooterLinkItem
