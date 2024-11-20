import React, { useState, useRef, useEffect } from "react"
import { slideDown, slideUp } from "utils"
import { AccordionItemType } from "types/custom"
import AccordionItem from "./sub-components/accordion-item"

interface AccordionProps {
  items: AccordionItemType[]
}

const Accordion = ({ items }: AccordionProps) => {
  const ref = useRef<Record<string, HTMLDivElement>>({})
  const [activeAccordion, setActiveAccordion] = useState(0)
  const [prevActiveAccordion, setPrevActiveAccordion] = useState(0)

  const handleActiveAccordion = (index: number) => {
    setPrevActiveAccordion(activeAccordion)
    setActiveAccordion(index)
  }

  useEffect(() => {
    if (prevActiveAccordion !== 0) {
      slideUp(ref.current[`content${prevActiveAccordion}`])
    }
    if (activeAccordion === 0) return
    slideDown(ref.current[`content${activeAccordion}`])
  }, [activeAccordion])

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          index={index}
          item={item}
          activeAccordion={activeAccordion}
          handleActiveAccordion={handleActiveAccordion}
          ref={ref}
        />
      ))}
    </div>
  )
}

export default Accordion
