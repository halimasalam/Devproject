import React from "react"
import * as styles from "./index.css"
import { Image } from "types/custom"
import SectionHeading from "components/common/section-heading"

export interface SolutionsHighlightProps {
  servicesHighlightTitle: string
  servicesHighlightDescription: React.ReactNode
  servicesHighlightImage: Image
}

export default function SolutionsHighlight(props: SolutionsHighlightProps) {
  return (
    <section
      id={props.servicesHighlightTitle.toLowerCase().replace(/ /g, "-")}
      className={styles.section}
      style={{ backgroundImage: `url(${props.servicesHighlightImage.url})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 m-auto">
            <div className={styles.sectionHeadingWrapper}>
              <SectionHeading
                title={props.servicesHighlightTitle}
                description={props.servicesHighlightDescription}
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
