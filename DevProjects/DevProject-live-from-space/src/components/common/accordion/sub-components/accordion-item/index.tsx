import React, { forwardRef, MutableRefObject } from "react"
import * as styles from "./index.css"
import htmr from "htmr"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { AccordionItemType } from "types/custom"

interface AccordionItemProps {
  index: number
  item: AccordionItemType
  activeAccordion: number
  handleActiveAccordion: (index: number) => void
}

const AccordionItem = forwardRef(
  (
    { index, item, activeAccordion, handleActiveAccordion }: AccordionItemProps,
    ref: MutableRefObject<Record<string, HTMLDivElement>>
  ) => {
    return (
      <div
        key={item.id}
        id={`accordion-item-${index + 1}`}
        className={`${styles.accordionItem} accordion-item`}
        onClick={() =>
          handleActiveAccordion(activeAccordion === index + 1 ? 0 : index + 1)
        }
      >
        <div className={styles.accordionTitle}>
          <span>{item.title}</span>
          <span className={styles.accordionIcon}>
            {activeAccordion === index + 1 ? (
              <FiChevronUp />
            ) : (
              <FiChevronDown />
            )}
          </span>
        </div>
        <div
          ref={(el) => (ref.current[`content${index + 1}`] = el)}
          className={styles.accordionContent}
        >
          <span className={styles.content}>
            {item.description}
            {item["features"] &&
              htmr(
                `<span>${item["features"].map(
                  (feature: string) => `<br />- ${feature}`
                )}</span>`
              )}
          </span>
        </div>
      </div>
    )
  }
)

export default AccordionItem
