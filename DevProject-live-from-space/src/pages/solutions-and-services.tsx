import * as React from "react"
import { graphql } from "gatsby"
import Layout from "layout"
import * as sections from "components/sections/solutions-and-services"
import Fallback, { FallbackProps } from "components/common/fallback"
import SEOHead from "components/head"
import { BannerProps } from "components/common/banner"
import { ServicesContentProps } from "components/services-content"
import { ServicesContactProps } from "components/services-contact"

interface ServicesPage {
  id: string
  title: string
  description: string
  image: { id: string; url: string }
  blocks: sections.ServicesPageBlock[]
}

interface ServicesPageData {
  servicesPage: ServicesPage
}

interface ServicesPageProps {
  data: ServicesPageData
}

type ComponentProps = BannerProps &
  ServicesContentProps &
  ServicesContactProps &
  FallbackProps

export default function SolutionsAndServicesPage(props: ServicesPageProps) {
  const { servicesPage } = props.data

  return (
    <Layout>
      {servicesPage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return <Component key={id} {...(componentProps as ComponentProps)} />
      })}
    </Layout>
  )
}

export const Head = (props: ServicesPageProps) => {
  const { servicesPage } = props.data
  return <SEOHead {...servicesPage} />
}

export const query = graphql`
  {
    servicesPage {
      id
      title
      description
      image {
        id
        url
      }
      blocks: content {
        id
        blocktype
        ...BannerContent
        ...ServicePageContent
        ...ContactPageContent
      }
    }
  }
`
