import React from "react"
import * as styles from "./index.css"
import { AccordionItemType, Image } from "types/custom"
import Heading from "./sub-components/heading"
import ImageArea from "./sub-components/image-area"
import Content from "./sub-components/content"

export interface SolutionsDetailsProps {
  solutionDetailsTitle: string
  solutionDetailsDescription: React.ReactNode
  solutionDetailsImage: Image
  solutionDetailsItems: AccordionItemType<"features", string[]>[]
}

export default function SolutionsDetails(props: SolutionsDetailsProps) {
  return (
    <section id="solutions-details" className={styles.section}>
      <div className="container">
        <Heading
          title={props.solutionDetailsTitle}
          description={props.solutionDetailsDescription}
        />
        <div className={`${styles.mbNe30} row row-cols-lg-2 row-cols-1`}>
          <Content items={props.solutionDetailsItems} />
          <ImageArea image={props.solutionDetailsImage} />
        </div>
      </div>
    </section>
  )
}
