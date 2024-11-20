import React, { forwardRef, Ref } from "react"
import * as styles from "./index.css"
import Fade from "react-reveal/Fade"
import { IoClose } from "react-icons/io5"

const VideoModal = forwardRef((_, ref: Ref<HTMLButtonElement>) => {
  return (
    <div
      className={styles.videoModal}
      tabIndex={-1}
      role="dialog"
      aria-label="You just opened the video modal"
    >
      <div className={styles.videoModalBody}>
        <Fade bottom>
          <div className={styles.videoModalInner}>
            <div className={styles.videoWrapper}>
              <button className={styles.closeButton} ref={ref}>
                <IoClose className={styles.closeIcon} />
              </button>
              <video className={styles.videoBackground} autoPlay playsInline>
                <source
                  src="/videos/LiveFromSpace-Intro.webm"
                  type="video/webm"
                />
                <source
                  src="/videos/LiveFromSpace-Intro.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
})

export default VideoModal
