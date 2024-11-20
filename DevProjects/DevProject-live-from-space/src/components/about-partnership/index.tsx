import React from "react"
import * as styles from "./index.css"
import { Image } from "types/custom"
import TextArea from "./sub-components/text-area"
import ImageArea from "./sub-components/image-area"

export interface AboutPartnershipProps {
  partnershipTitle: string
  partnershipTitleTags: string[]
  partnershipDescription: string
  partnershipImage: Image
}

export default function AboutPartnership(props: AboutPartnershipProps) {
  return (
    <section id="solutions-details" className={styles.section}>
      <div className="container">
        <div className="row align-items-center gy-4">
          <ImageArea image={props.partnershipImage} />
          <TextArea
            title={props.partnershipTitle}
            titleTags={props.partnershipTitleTags}
            description={props.partnershipDescription}
          />
        </div>
      </div>
    </section>
  )
}
