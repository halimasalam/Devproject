import React from "react"
import * as styles from "./index.css"
import htmr from "htmr"

interface BlogTitleProps {
  body: string
  isExcerpt?: boolean
}

const BlogContent = (props: BlogTitleProps) => {
  return (
    <p className={styles.blogText[props.isExcerpt ? "truncate" : "full"]}>
      {htmr(props.body)}
    </p>
  )
}

export default BlogContent
