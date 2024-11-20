import React from "react"
import * as styles from "./index.css"
import { graphql } from "gatsby"
import ContactDetailsItem from "./sub-components/contact-details-item"

export interface ContactDetailsProps {
  title: string
  locationTitle: string
  locationInfo: string[]
  locationIconType: string
  callTitle: string
  callInfo: string[]
  callIconType: string
  emailTitle: string
  emailInfo: string[]
  emailIconType: string
}

export default function ContactDetails(props: ContactDetailsProps) {
  return (
    <section id="help-desk" className={styles.contactDetailsSection}>
      <div className="container position-relative">
        <div
          className={`${styles.mbNe30} row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1`}
        >
          <ContactDetailsItem
            title={props.locationTitle}
            info={props.locationInfo}
            iconType={props.locationIconType}
          />
          <ContactDetailsItem
            title={props.callTitle}
            info={props.callInfo}
            iconType={props.callIconType}
          />
          <ContactDetailsItem
            title={props.emailTitle}
            info={props.emailInfo}
            iconType={props.emailIconType}
          />
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment ContactPageDetailsContent on ContactPageDetails {
    id
    title
    locationTitle
    locationInfo
    locationIconType
    callTitle
    callInfo
    callIconType
    emailTitle
    emailInfo
    emailIconType
  }
`
