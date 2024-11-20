import React from "react"
import * as styles from "./index.css"
import { FaPencilAlt, FaRegCalendarAlt, FaTags } from "react-icons/fa"

interface BlogMetaProps {
  author: string
  date: string
  tags: string[]
  isExcerpt?: boolean
}

const BlogMeta = (props: BlogMetaProps) => {
  return (
    <ul
      className={`${styles.blogMetaList}${
        !props.isExcerpt ? ` ${styles.mt60}` : ""
      }`}
    >
      <li className={styles.blogMetaListItem}>
        <FaPencilAlt className={styles.icon} />
        Written by {props.author}
      </li>
      <li className={styles.blogMetaListItem}>
        <FaRegCalendarAlt className={styles.icon} />
        {new Intl.DateTimeFormat("en-UK", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }).format(new Date(props.date))}
      </li>
      <li className={styles.blogMetaListItem}>
        <FaTags className={styles.icon} />
        {props.tags.join(", ")}
      </li>
    </ul>
  )
}

export default BlogMeta
