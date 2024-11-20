import React from "react"
import * as styles from "./index.css"
import { graphql } from "gatsby"
import { Image } from "types/custom"
import SectionHeading from "components/common/section-heading"

export interface AboutHighlightProps {
  title: string
  description: React.ReactNode
  backgroundImage: Image
}

export default function AboutHighlight(props: AboutHighlightProps) {
  return (
    <section
      id={props.title.toLowerCase().replace(/ /g, "-")}
      className={styles.section}
      style={{ backgroundImage: `url(${props.backgroundImage.url})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 m-auto">
            <div className={styles.sectionHeadingWrapper}>
              <SectionHeading
                title={props.title}
                description={props.description}
                titleColor="#fff"
                descriptionColor="#fff"
              />
            </div>
          </div>
        </div>
      </div>
      <img className={styles.decor1} src="/images/dot-grid.png" alt="dots" />
      <img className={styles.decor2} src="/images/dot-grid.png" alt="dots" />
    </section>
  )
}

export const query = graphql`
  fragment AboutPageHighlightContent on ContentHighlight {
    id
    title
    description
    backgroundImage {
      id
      url
      alt
    }
  }
`
