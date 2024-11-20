import React from "react"
import * as styles from "./index.css"

export interface TitleWithHighlightProps {
  title: string
  titleHighlight: string
  use?: "div" | "span"
}

export default function TitleWithHighlight({
  title,
  titleHighlight,
  use = "span",
}: TitleWithHighlightProps) {
  const Element = use
  const indexOfHighlight = title.indexOf(titleHighlight)

  if (indexOfHighlight === -1) return <>{title}</>

  const splitTitle = []

  if (indexOfHighlight > 0) {
    splitTitle.push(title.substring(0, indexOfHighlight))
  }

  splitTitle.push(titleHighlight)

  if (indexOfHighlight + titleHighlight.length < title.length) {
    splitTitle.push(
      title.substring(indexOfHighlight + titleHighlight.length, title.length)
    )
  }

  return (
    <>
      {splitTitle.map((text, index) => {
        const isLast = index === splitTitle.length - 1
        const content = `${text}${isLast ? "" : " "}`
        if (text === titleHighlight)
          return (
            <Element
              key={index.toString()}
              className={`${styles.titleHighlight}`}
            >
              {content}
            </Element>
          )
        else return <>{content}</>
      })}
    </>
  )
}
