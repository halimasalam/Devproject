import React from "react"
import * as styles from "./index.css"
import Fade from "react-reveal/Fade"
import ContactForm from "components/contact-form"
import shootingStars from "lotties/shooting-stars.json"
import { graphql } from "gatsby"
import { Player } from "@lottiefiles/react-lottie-player"
import ContactDetails from "./sub-components/contact-details"

export interface ServicesContactProps {
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
  formTitle: string
  formDescription: string
  formButtonText: string
}

export default function ServicesContact(props: ServicesContactProps) {
  return (
    <section
      id="consultation"
      className={styles.section}
      style={{ backgroundImage: "url('/images/bg-contact.jpg')" }}
    >
      <Player
        autoplay
        loop
        speed={0.2}
        controls={false}
        src={shootingStars}
        className={styles.lottie}
      />
      <div className="container">
        <div className="row row-cols-lg-2 row-cols-1 align-items-center">
          <Fade bottom distance="100px">
            <div className="col">
              <div className={styles.contactInfo}>
                <ContactDetails
                  title={props.locationTitle}
                  info={props.locationInfo}
                  iconType={props.locationIconType}
                />
                <ContactDetails
                  title={props.callTitle}
                  info={props.callInfo}
                  iconType={props.callIconType}
                />
                <ContactDetails
                  title={props.emailTitle}
                  info={props.emailInfo}
                  iconType={props.emailIconType}
                />
              </div>
            </div>
          </Fade>
          <Fade bottom delay={300} distance="100px">
            <div className={`${styles.contactFormWrapper} col`}>
              <div className={styles.contactFormArea}>
                <ContactForm
                  title={props.formTitle}
                  description={props.formDescription}
                  buttonText={props.formButtonText}
                  styleOption="alt"
                  hideLottie
                />
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment ContactPageContent on ContactPageContent {
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
    formTitle
    formDescription
    formButtonText
  }
`
