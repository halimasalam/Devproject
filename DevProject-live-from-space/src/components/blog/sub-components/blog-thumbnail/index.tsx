import React from "react"
import * as styles from "./index.css"
import { Link } from "gatsby"
import { Image } from "types/custom"

interface BlogThumbnailProps {
  slug: string
  image: Image
  isExcerpt?: boolean
}

const BlogThumbnail = (props: BlogThumbnailProps) => {
  return (
    <div className={styles.blogImageWrapper}>
      {props.isExcerpt ? (
        <Link to={props.slug} className="d-block">
          <img
            className={styles.blogImage}
            src={props.image.url}
            alt={props.image.alt}
          />
        </Link>
      ) : (
        <img
          className={styles.blogImage}
          src={props.image.url}
          alt={props.image.alt}
        />
      )}
    </div>
  )
}

export default BlogThumbnail
