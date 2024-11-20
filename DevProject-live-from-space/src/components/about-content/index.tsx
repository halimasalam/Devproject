import React from "react"
import { graphql } from "gatsby"
import { Image } from "types/custom"
import AboutCompanyProfile from "components/about-company-profile"
import AboutHighlight from "components/about-highlight"
import AboutPartnership from "components/about-partnership"
import AboutCareer from "components/about-career"
import AboutContact from "components/about-contact"
import htmr from "htmr"

export interface AboutContentProps {
  title: string
  companyProfileTitle: string
  companyProfileDescription: string
  companyProfileServices: string[]
  companyProfileImage: Image
  missionTitle: string
  missionDescription: string
  missionImage: Image
  partnershipTitle: string
  partnershipTitleTags: string[]
  partnershipDescription: string
  partnershipImage: Image
  coreValuesTitle: string
  coreValuesDescription: string
  coreValuesImage: Image
  careerTitle: string
  careerDescription: string
  careerButtonText: string
  careerButtonLink: string
  careerImage: Image
  aboutContactTitle: string
  aboutContactDescription: string
  aboutContactButtonText: string
  aboutContactButtonLink: string
  aboutContactPartnerLogos: Image[]
}

export default function AboutContent(props: AboutContentProps) {
  return (
    <>
      <AboutCompanyProfile {...props} />
      <AboutHighlight
        title={props.missionTitle}
        description={htmr(props.missionDescription)}
        backgroundImage={props.missionImage}
      />
      <AboutPartnership {...props} />
      <AboutHighlight
        title={props.coreValuesTitle}
        description={htmr(props.coreValuesDescription)}
        backgroundImage={props.coreValuesImage}
      />
      <AboutCareer {...props} />
      <AboutContact {...props} />
    </>
  )
}

export const query = graphql`
  fragment AboutPageContent on AboutPageContent {
    id
    title
    companyProfileTitle
    companyProfileDescription
    companyProfileServices
    companyProfileImage {
      id
      url
      alt
    }
    missionTitle
    missionDescription
    missionImage {
      id
      url
      alt
    }
    partnershipTitle
    partnershipTitleTags
    partnershipDescription
    partnershipImage {
      id
      url
      alt
    }
    coreValuesTitle
    coreValuesDescription
    coreValuesImage {
      id
      url
      alt
    }
    careerTitle
    careerDescription
    careerButtonText
    careerButtonLink
    careerImage {
      id
      url
      alt
    }
    aboutContactTitle
    aboutContactDescription
    aboutContactButtonText
    aboutContactButtonLink
    aboutContactPartnerLogos {
      id
      url
      alt
    }
  }
`
