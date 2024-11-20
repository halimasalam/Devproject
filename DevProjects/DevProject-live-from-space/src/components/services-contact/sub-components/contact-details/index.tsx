import React from "react"
import * as styles from "./index.css"
import htmr from "htmr"
import Icon from "components/common/icon"

interface ContactDetailsProps {
  title: string
  info: string[]
  iconType: string
}

const ContactDetails = (props: ContactDetailsProps) => {
  return (
    <div className={styles.contactInfoItem}>
      <div className={`${styles.icon} icon-light`}>
        <Icon
          id={`contact-icon-${props.iconType}`}
          type={props.iconType}
          delay={80}
        />
      </div>
      <div className="info">
        <h4 className={styles.title}>{props.title}</h4>
        <div className={styles.text}>{htmr(props.info.join("<br />"))}</div>
      </div>
    </div>
  )
}

export default ContactDetails
