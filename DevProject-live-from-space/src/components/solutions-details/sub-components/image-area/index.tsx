import React from "react"
import * as styles from "./index.css"
import Fade from "react-reveal/Fade"
import Tilt from "react-parallax-tilt"
import { Image } from "types/custom"
import * as constants from "constants/index"

interface ImageAreaProps {
  image: Image
}

const ImageArea = ({ image }: ImageAreaProps) => {
  return (
    <Fade bottom delay={300}>
      <div className={`${styles.col} col`}>
        <div className={styles.imageArea}>
          <Tilt
            scale={constants.TILT_SCALE}
            transitionSpeed={constants.TRANSITION_SPEED}
          >
            <img
              src={image.url}
              className={`${styles.image} img-fluid`}
              alt={image.alt}
            />
          </Tilt>
        </div>
      </div>
    </Fade>
  )
}

export default ImageArea
