import React from "react"
import * as styles from "./index.css"
import { Image } from "types/custom"
import TextArea from "./sub-components/text-area"
import ImageArea from "./sub-components/image-area"

export interface AboutCompanyProfileProps {
  companyProfileTitle: string
  companyProfileDescription: string
  companyProfileServices: string[]
  companyProfileImage: Image
}

export default function AboutCompanyProfile(props: AboutCompanyProfileProps) {
  return (
    <section id="solutions-details" className={styles.section}>
      <div className="container">
        <div className="row align-items-center gy-3">
          <TextArea
            title={props.companyProfileTitle}
            description={props.companyProfileDescription}
            services={props.companyProfileServices}
          />
          <ImageArea image={props.companyProfileImage} />
        </div>
      </div>
    </section>
  )
}
