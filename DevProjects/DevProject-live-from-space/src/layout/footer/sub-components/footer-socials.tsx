import React from "react"
import * as styles from "./footer-socials.css"
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa"

interface FooterSocialsProps {
  twitterLink: string
  facebookLink: string
  instagramLink: string
}

const FooterSocials = (props: FooterSocialsProps) => {
  return (
    <div className={styles.footerSocialInline}>
      <a target="_blank" href={props.twitterLink} className={styles.footerSocialInlineLink}>
        <FaTwitterSquare />
      </a>
      <a target="_blank" href={props.facebookLink} className={styles.footerSocialInlineLink}>
        <FaFacebookSquare />
      </a>
      <a target="_blank" href={props.instagramLink} className={styles.footerSocialInlineLink}>
        <FaInstagramSquare />
      </a>
    </div>
  )
}

export default FooterSocials
