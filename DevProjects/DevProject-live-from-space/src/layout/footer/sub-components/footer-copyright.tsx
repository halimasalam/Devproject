import React from "react"
import * as styles from "./footer-copyright.css"

interface FooterCopyrightProps {
  copyrightText: string
}

const FooterCopyright = (props: FooterCopyrightProps) => {
  return (
    <div className="row">
      <div className="col">
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()}{" "}
          <strong>{props.copyrightText}</strong>
        </p>
      </div>
    </div>
  )
}

export default FooterCopyright
