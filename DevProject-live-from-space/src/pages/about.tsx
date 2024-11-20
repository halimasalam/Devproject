import * as React from "react"
import { graphql } from "gatsby"
import Layout from "layout"
import * as sections from "components/sections/about"
import Fallback, { FallbackProps } from "components/common/fallback"
import SEOHead from "components/head"
import { BannerProps } from "components/common/banner"
import { AboutContentProps } from "components/about-content"

interface AboutPage {
  id: string
  title: string
  description: string
  image: { id: string; url: string }
  blocks: sections.AboutPageBlock[]
}

interface AboutPageData {
  aboutPage: AboutPage
}

interface AboutPageProps {
  data: AboutPageData
}

type ComponentProps = BannerProps & AboutContentProps & FallbackProps

export default function About(props: AboutPageProps) {
  const { aboutPage } = props.data

  return (
    <Layout>
      {aboutPage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return <Component key={id} {...(componentProps as ComponentProps)} />
      })}
    </Layout>
  )
}

export const Head = (props: AboutPageProps) => {
  const { aboutPage } = props.data
  return <SEOHead {...aboutPage} />
}

export const query = graphql`
  {
    aboutPage {
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
        ...AboutPageContent
      }
    }
  }
`
