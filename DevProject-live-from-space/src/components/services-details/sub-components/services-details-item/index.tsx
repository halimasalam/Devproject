import React from "react"
import * as styles from "./index.css"
import Icon from "components/common/icon"
import Fade from "react-reveal/Fade"
import { Link } from "gatsby"

export interface ServicesDetailsItemProps {
  id: string
  title: string
  description: string[]
  iconType: string
  link: string
}

const ServicesDetailsItem = (props: ServicesDetailsItemProps) => {
  return (
    <div className={`${styles.wrapper} col`}>
      <Fade bottom>
        <div className={`${styles.container} text-center`}>
          <div className={styles.icon}>
            <Icon
              id={`services-icon-${props.iconType}`}
              type={props.iconType}
              delay={80}
            />
          </div>
          <div className="content">
            <h3 className={styles.title}>{props.title}</h3>
            <p className={styles.description}>{props.description}</p>
            <Link to={props.link} className={styles.link}>
              Learn More
            </Link>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default ServicesDetailsItem
