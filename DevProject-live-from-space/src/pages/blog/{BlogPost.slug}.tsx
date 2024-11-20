import * as React from "react"
import { graphql } from "gatsby"
import Layout from "layout"
import SEOHead from "../../components/head"
import Banner from "components/common/banner"
import Blog, { BlogProps } from "components/blog"
import { Image } from "types/custom"

interface BlogPostProps {
  data: {
    blogPost: BlogProps
    blogsPage: {
      id: string
      title: string
      description: string
      image: Image
    }
  }
}

export default function BlogPost(props: BlogPostProps) {
  const { blogPost, blogsPage } = props.data

  return (
    <Layout>
      <Banner
        title={blogPost.title}
        image={blogsPage.image}
        breadcrumbs={["Home", "Blog", blogPost.title]}
        bgPos="50% 50%"
      />
      <Blog {...blogPost} />
    </Layout>
  )
}

export const Head = (props: BlogPostProps) => {
  const { blogsPage } = props.data
  return <SEOHead {...blogsPage} />
}

export const query = graphql`
  query BlogPostContent($id: String!) {
    blogPost(id: { eq: $id }) {
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
    blogsPage {
      id
      title
      description
      image {
        id
        url
      }
    }
  }
`
