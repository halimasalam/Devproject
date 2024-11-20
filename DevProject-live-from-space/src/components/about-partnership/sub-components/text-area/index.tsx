import React from "react"
import * as styles from "./index.css"
import Fade from "react-reveal/Fade"
import htmr from "htmr"
import rocketLight from "lotties/rocket-light.json"
import { Player } from "@lottiefiles/react-lottie-player"

interface TextAreaProps {
  title: string
  titleTags: string[]
  description: string
}

const TextArea = ({ title, titleTags, description }: TextAreaProps) => {
  return (
    <Fade bottom delay={300}>
      <div className="offset-xl-1 col-xl-6 col-lg-6 col-12 position-relative">
        <h3 className={styles.title}>{title}</h3>
        {titleTags.map((tag) => (
          <span key={tag} className={styles.titleTags}>
            {tag}
          </span>
        ))}
        <p className={styles.description}>{htmr(description)}</p>
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
