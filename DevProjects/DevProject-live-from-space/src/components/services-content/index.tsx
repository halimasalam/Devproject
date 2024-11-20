import React from "react"
import { graphql } from "gatsby"
import { AccordionItemType, Image } from "types/custom"
import { ServicesDetailsItemProps } from "components/services-details/sub-components/services-details-item"
import ServicesDetails from "components/services-details"
import SolutionsHighlight from "components/solutions-highlight"
import htmr from "htmr"
import ServiceDescription from "components/service-description"

export interface ServicesContentProps {
  title: string
  servicesDetailsTitle: string
  servicesDetailsDescription: string
  servicesDetailsItems: ServicesDetailsItemProps[]
  servicesHighlightTitle: string
  servicesHighlightDescription: string
  servicesHighlightImage: Image
  solutionDetailsTitle: string
  solutionDetailsDescription: string
  solutionDetailsImage: Image
  solutionDetailsItems: AccordionItemType<"features", string[]>[]
  serviceName: string
  serviceDescription: string
  serviceImage: Image
}

export default function ServicesContent(props: ServicesContentProps) {
  return (
    <>
      <ServicesDetails
        {...props}
        servicesDetailsDescription={htmr(props.servicesDetailsDescription)}
      />
      <SolutionsHighlight
        {...props}
        servicesHighlightDescription={htmr(props.servicesHighlightDescription)}
      />
      <ServiceDescription {...props} />
    </>
  )
}

export const query = graphql`
  fragment ServicePageContent on ServicePageContent {
    id
    title
    servicesDetailsTitle
    servicesDetailsDescription
    servicesDetailsItems {
      id
      title
      description
      iconType
      link
    }
    servicesHighlightTitle
    servicesHighlightDescription
    servicesHighlightImage {
      id
      url
      alt
    }
    solutionDetailsTitle
    solutionDetailsDescription
    solutionDetailsImage {
      id
      url
      alt
    }
    solutionDetailsItems {
      id
      title
      description
      features
    }
    serviceName
    serviceImage {
      id
      url
      alt
    }
    serviceDescription: body
  }
`
