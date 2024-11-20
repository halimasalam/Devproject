import * as React from "react"
import { graphql } from "gatsby"
import Layout from "layout"
import * as sections from "components/sections/home"
import Fallback, { FallbackProps } from "components/common/fallback"
import SEOHead from "components/head"
import { HomeContentProps } from "components/home-content"
import { HomeBrandsProps } from "components/home-brands"
import { ServicesContactProps } from "components/services-contact"

interface HomePage {
  id: string
  title: string
  description: string
  image: { id: string; url: string }
  blocks: sections.HomePageBlock[]
}

interface HomePageData {
  homePage: HomePage
}

interface HomepageProps {
  data: HomePageData
}

type ComponentProps = HomeContentProps &
  HomeBrandsProps &
  ServicesContactProps &
  FallbackProps

export default function HomePage(props: HomepageProps) {
  const { homePage } = props.data

  return (
    <Layout>
      {homePage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return <Component key={id} {...(componentProps as ComponentProps)} />
      })}
    </Layout>
  )
}

export const Head = (props: HomepageProps) => {
  const { homePage } = props.data
  return <SEOHead {...homePage} />
}

export const query = graphql`
  {
    homePage {
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
        ...HomePageContent
        ...ContactPageContent
      }
    }
  }
`
