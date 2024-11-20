import React from "react"
import * as styles from "./index.css"
import ServicesDetailsItem, {
  ServicesDetailsItemProps,
} from "./sub-components/services-details-item"
import SectionHeading from "components/common/section-heading"

export interface ServicesDetailsProps {
  servicesDetailsTitle: string
  servicesDetailsDescription: React.ReactNode
  servicesDetailsItems: ServicesDetailsItemProps[]
}

export default function ServicesDetails(props: ServicesDetailsProps) {
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : ""

  return (
    <section
      id="details"
      className={styles.servicesDetailsSection}
      style={{
        backgroundColor: currentPath.includes("/services") ? "#fff" : "#f8faff",
      }}
    >
      <div className="container">
        <SectionHeading
          title={props.servicesDetailsTitle}
          description={props.servicesDetailsDescription}
        />
        <div
          className={`${styles.mbNe30} row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 position-relative`}
        >
          {props.servicesDetailsItems.map((item) => (
            <ServicesDetailsItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
