import React, { useEffect, useState, useRef } from "react"
import * as styles from "./index.css"
import { Image } from "types/custom"
import SectionHeading from "components/common/section-heading"
import { FaPlay } from "react-icons/fa"
import VideoModal from "./sub-components/video-modal"
import rocketLight from "lotties/rocket-light.json"
import { Player } from "@lottiefiles/react-lottie-player"

export interface HomeIntroProps {
  introTitle: string
  introDescription: React.ReactNode
  introVideoThumbnail: Image
}

export default function HomeIntro(props: HomeIntroProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const handleShowVideoModal = () => {
    setIsVideoModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const handleHideVideoModal = () => {
    setIsVideoModalOpen(false)
    document.body.style.overflow = "revert"
    closeButtonRef.current = null
  }

  useEffect(() => {
    if (isVideoModalOpen) {
      closeButtonRef.current.addEventListener("click", handleHideVideoModal)
    }

    return () => {
      if (closeButtonRef.current) {
        closeButtonRef.current.removeEventListener(
          "click",
          handleHideVideoModal
        )
      }
    }
  }, [closeButtonRef.current, isVideoModalOpen])

  return (
    <>
      <section id="learn-more" className={styles.section}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <SectionHeading
                title={props.introTitle}
                description={props.introDescription}
                lottiePlayer={
                  <Player
                    autoplay
                    loop
                    controls={false}
                    src={rocketLight}
                    className={styles.lottie}
                  />
                }
              />
            </div>
            <div className="col-12 col-lg-10 mx-auto">
              <div className={styles.videoPopupArea}>
                <div className={styles.videoThumbnail}>
                  <img
                    className={styles.thumbnailImage}
                    src={props.introVideoThumbnail.url}
                    alt={props.introVideoThumbnail.alt}
                  />
                  <button
                    className={styles.buttonIcon}
                    onClick={handleShowVideoModal}
                  >
                    <FaPlay className={styles.icon} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isVideoModalOpen && <VideoModal ref={closeButtonRef} />}
    </>
  )
}
