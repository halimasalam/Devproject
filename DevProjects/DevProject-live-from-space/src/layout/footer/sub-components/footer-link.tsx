import React from "react"
import * as styles from "./footer-link.css"
import { footerColWrapper, footerWidgetContent } from "../index.css"

export interface FooterLinkType {
  title: string
  items: {
    title: string
    link: string
  }[]
}

interface FooterLinkProps {
  data: FooterLinkType
  linkItems: React.ReactNode
}

const FooterLink = (props: FooterLinkProps) => {
  return (
    <div
      className={`col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 ${footerColWrapper}`}
    >
      <div className="footer-widget">
        <h4 className={styles.footerWidgetTitle}>{props.data.title}</h4>
        <div className={footerWidgetContent}>
          <ul className={styles.footerWidgetContentList}>{props.linkItems}</ul>
        </div>
      </div>
    </div>
  )
}

export default FooterLink
