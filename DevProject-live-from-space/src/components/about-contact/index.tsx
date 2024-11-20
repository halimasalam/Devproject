import React from "react"
import * as styles from "./index.css"
import { Link } from "gatsby"
import { Image } from "types/custom"
import Fade from "react-reveal/Fade"
import SectionHeading from "components/common/section-heading"
import PartnerLogo from "./sub-components/partner-logo"

export interface AboutContactProps {
  aboutContactTitle: string
  aboutContactDescription: string
  aboutContactButtonText: string
  aboutContactButtonLink: string
  aboutContactPartnerLogos: Image[]
}

export default function AboutContact(props: AboutContactProps) {
  return (
    <div className={styles.section}>
      <div className={`${styles.container} container text-center`}>
        <div className={`${styles.maxW690} mx-auto`}>
          <SectionHeading
            title={props.aboutContactTitle}
            description={props.aboutContactDescription}
          />
        </div>
        <Fade bottom delay={300}>
          <Link
            className={`${styles.contactBtn} btn btn-primary`}
            to={props.aboutContactButtonLink}
          >
            {props.aboutContactButtonText}
          </Link>
        </Fade>
        {props.aboutContactPartnerLogos?.map((logo, index) => (
          <PartnerLogo key={logo.id} index={index} logo={logo} />
        ))}
      </div>
    </div>
  )
}
