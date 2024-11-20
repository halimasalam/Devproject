import React from "react"
import * as styles from "./index.css"
import Fade from "react-reveal/Fade"
import htmr from "htmr"
import rocketLight from "lotties/rocket-light.json"
import { Player } from "@lottiefiles/react-lottie-player"
import { FaCheck } from "react-icons/fa"

interface TextAreaProps {
  title: string
  description: string
  services: string[]
}

const TextArea = ({ title, description, services }: TextAreaProps) => {
  return (
    <Fade bottom>
      <div className="col-xl-5 col-lg-6 col-12 position-relative">
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{htmr(description)}</p>
        <p className={styles.description}>Some of our services includes:</p>
        <ul className={styles.servicesList}>
          {services.map((service) => (
            <li key={service} className={styles.servicesListItem}>
              <div className={styles.icon}>
                <FaCheck />
              </div>
              <div className={styles.text}>{service}</div>
            </li>
          ))}
        </ul>
        <Player
          autoplay
          loop
          controls={false}
          src={rocketLight}
          className={styles.lottie}
        />
      </div>
    </Fade>
  )
}

export default TextArea
