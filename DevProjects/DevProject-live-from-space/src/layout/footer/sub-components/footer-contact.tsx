import React from "react"
import * as styles from "./footer-contact.css"
import { Link } from "gatsby"

interface FooterContactProps {
  phoneNumber: string
  email: string
}

const FooterContact = (props: FooterContactProps) => {
  return (
    <div className="content">
      <p className={styles.footerWidgetContentParagraph}>
        <Link
          to={`tel:${props.phoneNumber.replace(/[()]/g, "").replace(/ /g, "")}`}
          className={styles.footerWidgetContentLink}
        >
          {props.phoneNumber}
        </Link>
      </p>
      <p>
        <Link
          to={`mailto:${props.email}`}
          className={styles.footerWidgetContentLink}
        >
          {props.email}
        </Link>
      </p>
    </div>
  )
}

export default FooterContact
