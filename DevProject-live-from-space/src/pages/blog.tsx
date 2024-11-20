import * as React from "react"
import { graphql } from "gatsby"
import Layout from "layout"
import * as sections from "components/sections/blog"
import Fallback, { FallbackProps } from "components/common/fallback"
import SEOHead from "components/head"
import { BannerProps } from "components/common/banner"
import Blog, { BlogProps } from "components/blog"

interface BlogsPage {
  id: string
  title: string
  description: string
  image: { id: string; url: string }
  blocks: sections.BlogsPageBlock[]
}

interface BlogsPageData {
  blogsPage: BlogsPage
  allBlogPost: {
    nodes: BlogProps[]
  }
}

interface BlogsPageProps {
  data: BlogsPageData
}

type ComponentProps = BannerProps & FallbackProps

export default function Blogs(props: BlogsPageProps) {
  const { blogsPage, allBlogPost } = props.data
  const { id, blocktype, ...componentProps } = blogsPage.blocks[0]
  const Component = sections[blocktype] || Fallback

  return (
    <Layout>
      <Component key={id} {...(componentProps as ComponentProps)} />
      {allBlogPost &&
        allBlogPost.nodes.map((blog) => {
          return (
            <Blog
              key={blog.id}
              {...blog}
              slug={`/blog/${blog.slug}`}
              isExcerpt
            />
          )
        })}
    </Layout>
  )
}

export const Head = (props: BlogsPageProps) => {
  const { blogsPage } = props.data
  return <SEOHead {...blogsPage} />
}

export const query = graphql`
  {
    blogsPage {
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
      }
    }
    allBlogPost(limit: 3) {
      nodes {
        id
        title
        slug
        image {
          id
          url
          alt
        }
        body
        author
        date
        tags
      }
    }
  }
`
