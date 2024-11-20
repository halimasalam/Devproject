import * as React from "react"
import { graphql } from "gatsby"
import Layout from "layout"
import * as sections from "components/sections/contact"
import Fallback, { FallbackProps } from "components/common/fallback"
import SEOHead from "components/head"
import { BannerProps } from "components/common/banner"
import { ContactContentProps } from "components/contact-content"

interface ContactPage {
  id: string
  title: string
  description: string
  image: { id: string; url: string }
  blocks: sections.ContactPageBlock[]
}

interface ContactPageData {
  contactPage: ContactPage
}

interface ContactPageProps {
  data: ContactPageData
}

type ComponentProps = BannerProps & ContactContentProps & FallbackProps

export default function ContactPage(props: ContactPageProps) {
  const { contactPage } = props.data

  return (
    <Layout>
      {contactPage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return <Component key={id} {...(componentProps as ComponentProps)} />
      })}
    </Layout>
  )
}

export const Head = (props: ContactPageProps) => {
  const { contactPage } = props.data
  return <SEOHead {...contactPage} />
}

export const query = graphql`
  {
    contactPage {
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
        ...ContactPageContent
      }
    }
  }
`
