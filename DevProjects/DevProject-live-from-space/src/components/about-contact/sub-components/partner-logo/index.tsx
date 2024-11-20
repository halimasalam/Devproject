import React from "react"
import * as styles from "./index.css"
import { Image } from "types/custom"

export interface PartnerLogoProps {
  index: number
  logo: Image
}

export default function PartnerLogo({ index, logo }: PartnerLogoProps) {
  return (
    <div
      key={logo.id}
      className={`${styles.logoWrapper} ${styles[`logo${index + 1}`]}`}
    >
      <img className={styles.logoImage} src={logo.url} alt={logo.alt} />
    </div>
  )
}
