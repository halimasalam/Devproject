import React from "react"
import * as styles from "./index.css"
import Fade from "react-reveal/Fade"
import { Link } from "gatsby"
import { Image } from "types/custom"
import BlogMeta from "./sub-components/blog-meta"
import BlogThumbnail from "./sub-components/blog-thumbnail"
import BlogTitle from "./sub-components/blog-title"
import BlogContent from "./sub-components/blog-content"

export interface BlogProps {
  id: string
  title: string
  slug: string
  image: Image
  body: string
  author: string
  date: string
  tags: string[]
  isExcerpt?: boolean
}

const Blog = (props: BlogProps) => {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className={`${styles.mb50} col-lg-8 col-12 order-lg-1 mx-auto`}>
            <div className="row row-cols-1 no-gutters">
              <Fade bottom>
                <div className={`${styles.mb30} col`}>
                  <div className={`${styles.blog} col`}>
                    <BlogThumbnail {...props} />
                    <div className={styles.blogContentWrapper}>
                      {props.isExcerpt && <BlogMeta {...props} />}
                      <BlogTitle {...props} />
                      <BlogContent {...props} />
                      {props.isExcerpt ? (
                        <Link
                          to={props.slug}
                          className={`${styles.readMoreBtn} btn btn-primary`}
                        >
                          Read More
                        </Link>
                      ) : (
                        <BlogMeta {...props} />
                      )}
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
