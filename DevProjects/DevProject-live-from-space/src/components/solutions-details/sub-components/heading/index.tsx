import React from "react"
import * as styles from "./index.css"
import Fade from "react-reveal/Fade"

interface HeadingProps {
  title: string
  description: React.ReactNode
}

const Heading = ({ title, description }: HeadingProps) => {
  return (
    <Fade bottom>
      <div className={styles.sectionTitle}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </Fade>
  )
}

export default Heading
