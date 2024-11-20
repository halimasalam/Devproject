import React from "react"
import * as styles from "./index.css"
import * as constants from "constants/index"
import Fade from "react-reveal/Fade"
import Tilt from "react-parallax-tilt"
import htmr from "htmr"
import { Image } from "types/custom"

export interface ServiceDescriptionProps {
  serviceName: string
  serviceDescription: string
  serviceImage: Image
}

export default function ServiceDescription(props: ServiceDescriptionProps) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-12 mb-5 mb-lg-0">
            <Tilt
              scale={constants.TILT_SCALE}
              transitionSpeed={constants.TRANSITION_SPEED}
            >
              <img
                className="img-fluid"
                src={props.serviceImage.url}
                alt={props.serviceImage.alt}
              />
            </Tilt>
          </div>
          <div className="col-lg-7 col-md-12 col-12 offset-lg-1">
            <Fade bottom>
              <h3 className={styles.serviceName}>{props.serviceName}</h3>
              <p className={styles.serviceDescription}>
                {htmr(props.serviceDescription)}
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  )
}
