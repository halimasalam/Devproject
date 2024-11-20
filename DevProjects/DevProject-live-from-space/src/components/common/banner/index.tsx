import React from "react"
import * as styles from "./index.css"
import { Link } from "gatsby"
import { FaChevronRight } from "react-icons/fa"
import { Image } from "types/custom"
import TitleWithHighlight from "../title-with-highlight"
import slugify from "utils/slugify"

export interface BannerProps {
  title: string
  titleHighlight?: string
  image: Image
  breadcrumbs: string[]
  bgPos?: string
}

export default function Banner({
  title,
  titleHighlight,
  image,
  breadcrumbs,
  bgPos,
}: BannerProps) {
  console.log(title, titleHighlight)
  return (
    <section
      className={styles.bannerWrapper}
      style={{
        backgroundImage: `url(${image.url})`,
        backgroundPosition: bgPos || "50% 50%",
      }}
    >
      <div className="container banner-title">
        <h1 className={styles.title}>
          <TitleWithHighlight
            title={title}
            titleHighlight={titleHighlight}
            use="span"
          />
        </h1>
      </div>
      <div className="container banner-breadcrumbs">
        <ul
          className={`${styles.breadcrumbList} breadcrumb justify-content-center`}
        >
          {breadcrumbs.map((text, index) => (
            <li key={text} className={styles.breadcrumbItem}>
              {index < breadcrumbs.length - 1 ? (
                <>
                  {index > 0 && (
                    <span className={styles.breadcrumbDivider}>
                      <FaChevronRight />
                    </span>
                  )}
                  <Link
                    to={index === 0 ? "/" : `/${slugify(text)}`}
                    className={styles.breadcrumbItemLink}
                  >
                    {text}
                  </Link>
                </>
              ) : (
                <>
                  <span className={styles.breadcrumbDivider}>
                    <FaChevronRight />
                  </span>
                  <span>{text}</span>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
