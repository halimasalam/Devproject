import React from "react"
import * as styles from "./index.css"
import Fade from "react-reveal/Fade"
import { theme } from "styles/theme.css"

interface SectionHeadingProps {
  title: string
  description: React.ReactNode
  titleColor?: string
  descriptionColor?: string
  lottiePlayer?: React.ReactNode
}

const SectionHeading = ({
  title,
  description,
  titleColor = theme.colors.heading,
  descriptionColor = theme.colors.subHeading,
  lottiePlayer,
}: SectionHeadingProps) => {
  return (
    <Fade bottom>
      <div className={styles.sectionTitle}>
        <h2 className={styles.title} style={{ color: titleColor }}>
          {title}
        </h2>
        <p className={styles.subTitle} style={{ color: descriptionColor }}>
          {description}
        </p>
        {lottiePlayer}
      </div>
    </Fade>
  )
}

export default SectionHeading
