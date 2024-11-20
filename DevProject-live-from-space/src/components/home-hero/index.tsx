import React, { useEffect, useRef, useState } from "react"
import * as styles from "./index.css"
import { Link } from "gatsby"
import Scene from "components/scene"
import TitleWithHighlight from "components/common/title-with-highlight"

export interface HomeHeroProps {
  heroTitle: string
  heroTitleHighlight: string
  heroDescription: string
  heroPrimaryButtonText: string
  heroPrimaryButtonLink: string
  heroSecondaryButtonText: string
  heroSecondaryButtonLink: string
}

export default function HomeHero(props: HomeHeroProps) {
  const videoRef = useRef<HTMLVideoElement>()
  const [showScene, setShowScene] = useState(false)

  const currentHash = typeof window !== "undefined" && window.location.hash

  useEffect(() => {
    if (currentHash === "#explore") {
      setShowScene(true)
      document.querySelector("body").classList.add("no-scroll")
    } else {
      setShowScene(false)
      document.querySelector("body").classList.remove("no-scroll")
    }
  }, [currentHash])

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 1.75
  }, [videoRef.current])

  useEffect(() => {
    document
      .querySelector("body")
      .addEventListener("touchstart", () => videoRef.current?.play())

    return () => {
      document.querySelector("body").removeEventListener("touchstart", () => {})
    }
  }, [])

  return (
    <div className={styles.heroWrapper}>
      {showScene ? (
        <Scene />
      ) : (
        <>
          <video
            ref={videoRef}
            className={styles.videoBackground}
            poster="/images/poster.png"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/videos/LiveFromSpace-3d.webm" type="video/webm" />
            <source src="/videos/LiveFromSpace-3d.mp4" type="video/mp4" />
          </video>
          <div className={styles.overlay}></div>
          <div className={`${styles.w100} container`}>
            <div
              className={`${styles.subContainer} row row-cols-lg-1 row-cols-1`}
            >
              <div className={`${styles.w100} col align-self-center`}>
                <div className={`${styles.introContent} text-center`}>
                  <h2 className={styles.title}>
                    <TitleWithHighlight
                      title={props.heroTitle}
                      titleHighlight={props.heroTitleHighlight}
                      use="div"
                    />
                  </h2>
                  <div className={styles.desc}>
                    <p className={styles.descParagraph}>
                      {props.heroDescription}
                    </p>
                  </div>
                  <span className={styles.linkGroup}>
                    {props.heroPrimaryButtonText && (
                      <Link
                        to={props.heroPrimaryButtonLink}
                        className={`${styles.primaryButton} btn btn-primary`}
                      >
                        {props.heroPrimaryButtonText}
                      </Link>
                    )}
                    {props.heroSecondaryButtonText && (
                      <Link
                        to={props.heroSecondaryButtonLink}
                        className={`${styles.secondaryButton} btn`}
                      >
                        {props.heroSecondaryButtonText}
                      </Link>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
