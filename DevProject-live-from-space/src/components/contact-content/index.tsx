import React from "react"
import { graphql } from "gatsby"
import ContactDetails from "components/contact-details"
import ContactForm from "components/contact-form"

export interface ContactContentProps {
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

export default function ContactContent(props: ContactContentProps) {
  return (
    <>
      <ContactDetails {...props} />
      <ContactForm
        title={props.formTitle}
        description={props.formDescription}
        buttonText={props.formButtonText}
      />
    </>
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
