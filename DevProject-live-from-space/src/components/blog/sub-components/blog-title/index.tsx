import React from "react"
import * as styles from "./index.css"
import { Link } from "gatsby"

interface BlogTitleProps {
  title: string
  slug: string
  isExcerpt?: boolean
}

const BlogTitle = (props: BlogTitleProps) => {
  return (
    <>
      {props.isExcerpt ? (
        <Link to={props.slug} className={styles.blogTitleLink}>
          <h3 className={styles.blogTitle}>{props.title}</h3>
        </Link>
      ) : (
        <h3 className={styles.blogTitle}>{props.title}</h3>
      )}
    </>
  )
}

export default BlogTitle
