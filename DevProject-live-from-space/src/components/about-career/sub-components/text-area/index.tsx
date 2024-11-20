import React from "react"
import * as styles from "./index.css"
import Fade from "react-reveal/Fade"
import rocketLight from "lotties/rocket-light.json"
import { Link } from "gatsby"
import { Player } from "@lottiefiles/react-lottie-player"
import htmr from "htmr"

interface TextAreaProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

const TextArea = ({
  title,
  description,
  buttonText,
  buttonLink,
}: TextAreaProps) => {
  return (
    <Fade bottom>
      <div className="col-xl-5 col-lg-6 col-12 position-relative">
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{htmr(description)}</p>
        <Fade bottom delay={300}>
          <Link
            className={`${styles.submitBtn} btn btn-primary`}
            to={buttonLink}
          >
            {buttonText}
          </Link>
        </Fade>
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
