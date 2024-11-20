import React from "react"
import Banner, { BannerProps } from "components/common/banner"
import { graphql } from "gatsby"

export default function BlogBanner(props: BannerProps) {
  return <Banner {...props} bgPos="50% 50%" />
}

export const query = graphql`
  fragment BannerContent on Banner {
    id
    title
    titleHighlight
    breadcrumbs
    image {
      id
      url
      alt
    }
  }
`