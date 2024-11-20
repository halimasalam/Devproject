import * as React from "react"
import { graphql } from "gatsby"
import Layout from "layout"
import SEOHead from "../../components/head"
import Banner from "components/common/banner"
import { AccordionItemType, Image } from "types/custom"
import ServiceDescription from "components/service-description"
import SolutionsDetails from "components/solutions-details"
import AboutContact from "components/about-contact"
import htmr from "htmr"

interface SingleServicePageProps {
  data: {
    singleServicePage: {
      id: string
      title: string
      slug: string
      description: string
      image: Image
      bannerImage: Image
      serviceImage: Image
      bannerBreadcrumbs: string[]
      serviceName: string
      serviceDescription: string
      solutionDetailsTitle: string
      solutionDetailsDescription: string
      solutionDetailsImage: Image
      solutionDetailsItems: AccordionItemType<"features", string[]>[]
      aboutContactTitle: string
      aboutContactDescription: string
      aboutContactButtonText: string
      aboutContactButtonLink: string
      aboutContactPartnerLogos: Image[]
    }
  }
}

export default function SingleServicePage(props: SingleServicePageProps) {
  const { singleServicePage: data } = props.data

  return (
    <Layout>
      <Banner
        title={data.title}
        image={data.bannerImage}
        breadcrumbs={data.bannerBreadcrumbs}
        bgPos="50% 50%"
      />
      {!data.solutionDetailsTitle && (
        <ServiceDescription
          serviceName={data.serviceName}
          serviceDescription={data.serviceDescription}
          serviceImage={data.serviceImage}
        />
      )}
      {data.solutionDetailsTitle && (
        <SolutionsDetails
          {...data}
          solutionDetailsDescription={htmr(data.solutionDetailsDescription)}
        />
      )}
      <AboutContact {...data} />
    </Layout>
  )
}

export const Head = (props: SingleServicePageProps) => {
  const { singleServicePage } = props.data
  return <SEOHead {...singleServicePage} />
}

export const query = graphql`
  query SingleServicePageContent($id: String!) {
    singleServicePage(id: { eq: $id }) {
      id
      title
      slug
      description
      image {
        id
        url
        alt
      }
      bannerImage {
        id
        url
        alt
      }
      serviceImage {
        id
        url
        alt
      }
      bannerBreadcrumbs
      serviceName
      serviceDescription: html
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
  }
`
