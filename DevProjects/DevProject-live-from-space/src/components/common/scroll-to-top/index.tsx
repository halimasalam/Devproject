import React, { useState, useEffect } from "react"
import * as styles from "./index.css"
import { IoMdRocket } from "react-icons/io"

const ScrollToTop = () => {
  const [stick, setStick] = useState(false)

  const onClickHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    let currentPosition = window.pageYOffset

    const scrollHandler = () => {
      const scrollPosition = window.pageYOffset

      if (scrollPosition < 200) setStick(false)
      else if (scrollPosition < currentPosition) setStick(true)
      else setStick(false)

      currentPosition = scrollPosition
    }

    globalThis.addEventListener("scroll", function () {
      scrollHandler()
    })

    return () => {
      globalThis.removeEventListener("scroll", function () {
        scrollHandler()
      })
    }
  }, [stick])

  return (
    <button
      type="button"
      className={`${styles.scrollTop} ${stick ? styles.show : ""}`}
      onClick={onClickHandler}
    >
      <IoMdRocket className={styles.bounceLoop} />
    </button>
  )
}

export default ScrollToTop
