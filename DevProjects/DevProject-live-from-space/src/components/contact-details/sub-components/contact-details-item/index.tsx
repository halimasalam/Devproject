import React from "react"
import * as styles from "./index.css"
import Icon from "components/common/icon"
import Fade from "react-reveal/Fade"
import htmr from "htmr"

interface ContactDetailsItemProps {
  title: string
  info: string[]
  iconType: string
}

const ContactDetailsItem = (props: ContactDetailsItemProps) => {
  return (
    <div className={`${styles.mb30} col`}>
      <Fade bottom>
        <div className={styles.contactInfo}>
          <div className={styles.icon}>
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
      </Fade>
    </div>
  )
}

export default ContactDetailsItem
