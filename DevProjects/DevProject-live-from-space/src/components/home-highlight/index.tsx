import React from "react"
import * as styles from "./index.css"
import { Image } from "types/custom"
import SectionHeading from "components/common/section-heading"

export interface HomeHighlightProps {
  highlightTitle: string
  highlightDescription: React.ReactNode
  highlightImage: Image
}

export default function HomeHighlight(props: HomeHighlightProps) {
  return (
    <section
      id={props.highlightTitle.toLowerCase().replace(/ /g, "-")}
      className={styles.section}
      style={{ backgroundImage: `url(${props.highlightImage.url})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 m-auto">
            <div className={styles.sectionHeadingWrapper}>
              <SectionHeading
                title={props.highlightTitle}
                description={props.highlightDescription}
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
