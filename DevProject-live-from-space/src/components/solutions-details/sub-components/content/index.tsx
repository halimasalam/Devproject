import React from "react"
import * as styles from "./index.css"
import Fade from "react-reveal/Fade"
import { Scrollbars } from "react-custom-scrollbars-2"
import { AccordionItemType } from "types/custom"
import Accordion from "components/common/accordion"

interface ContentProps {
  items: AccordionItemType<"features", string[]>[]
}

const Content = ({ items }: ContentProps) => {
  return (
    <Fade bottom>
      <Scrollbars
        universal
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        style={{ height: 450 }}
      >
        <div className={`${styles.col} col`}>
          <Accordion items={items} />
        </div>
      </Scrollbars>
    </Fade>
  )
}

export default Content
