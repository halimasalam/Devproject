import React from "react"
import { graphql } from "gatsby"
import { Image } from "types/custom"
import { ServicesDetailsItemProps } from "components/services-details/sub-components/services-details-item"
import ServicesDetails from "components/services-details"
import HomeHero from "components/home-hero"
import HomeIntro from "components/home-intro"
import HomeBrands from "components/home-brands"
import HomeHighlight from "components/home-highlight"
import htmr from "htmr"

export interface HomeContentProps {
  title: string
  heroTitle: string
  heroTitleHighlight: string
  heroDescription: string
  heroPrimaryButtonText: string
  heroPrimaryButtonLink: string
  heroSecondaryButtonText: string
  heroSecondaryButtonLink: string
  introTitle: string
  introDescription: string
  introVideoThumbnail: Image
  servicesDetailsTitle: string
  servicesDetailsDescription: string
  servicesDetailsItems: ServicesDetailsItemProps[]
  partnerTitle: string
  partnerDescription: string
  partnerLogos: Image[]
  highlightTitle: string
  highlightDescription: string
  highlightImage: Image
  clientTitle: string
  clientDescription: string
  clientLogos: Image[]
}

export default function HomeContent(props: HomeContentProps) {
  return (
    <>
      <HomeHero {...props} />
      <HomeIntro {...props} introDescription={htmr(props.introDescription)} />
      <ServicesDetails
        {...props}
        servicesDetailsDescription={htmr(props.servicesDetailsDescription)}
      />
      <HomeBrands
        title={props.partnerTitle}
        description={htmr(props.partnerDescription)}
        brandLogos={props.partnerLogos}
      />
      <HomeHighlight
        {...props}
        highlightDescription={htmr(props.highlightDescription)}
      />
      <HomeBrands
        title={props.clientTitle}
        description={htmr(props.clientDescription)}
        brandLogos={props.clientLogos}
      />
    </>
  )
}

export const query = graphql`
  fragment HomePageContent on HomePageContent {
    id
    title
    heroTitle
    heroTitleHighlight
    heroDescription
    heroPrimaryButtonText
    heroPrimaryButtonLink
    heroSecondaryButtonText
    heroSecondaryButtonLink
    introTitle
    introDescription
    introVideoThumbnail {
      id
      url
      alt
    }
    servicesDetailsTitle
    servicesDetailsDescription
    servicesDetailsItems {
      id
      title
      description
      iconType
      link
    }
    partnerTitle
    partnerDescription
    partnerLogos {
      id
      url
      alt
    }
    highlightTitle
    highlightDescription
    highlightImage {
      id
      url
      alt
    }
    clientTitle
    clientDescription
    clientLogos {
      id
      url
      alt
    }
  }
`
