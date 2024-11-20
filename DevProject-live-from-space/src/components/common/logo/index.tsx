import React from "react"
import * as styles from "./index.css"
import { Link } from "gatsby"

interface LogoProps {
  src: string
  alt?: string
}

const Logo = ({ src, alt = "LiveFromSpace Logo" }: LogoProps) => {
  return (
    <Link to="/" className={styles.logoLink}>
      <img className={styles.logoImage} src={src} alt={alt} />
    </Link>
  )
}

export default Logo
