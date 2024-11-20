import React from "react"
import * as styles from "./index.css"
import { Image } from "types/custom"
import TextArea from "./sub-components/text-area"
import ImageArea from "./sub-components/image-area"

export interface AboutCareerProps {
  careerTitle: string
  careerDescription: string
  careerButtonText: string
  careerButtonLink: string
  careerImage: Image
}

export default function AboutCareer(props: AboutCareerProps) {
  return (
    <section id="careers" className={styles.section}>
      <div className="container">
        <div className="row flex-column-reverse flex-lg-row align-items-center gy-4">
          <TextArea
            title={props.careerTitle}
            description={props.careerDescription}
            buttonText={props.careerButtonText}
            buttonLink={props.careerButtonLink}
          />
          <ImageArea image={props.careerImage} />
        </div>
      </div>
    </section>
  )
}
