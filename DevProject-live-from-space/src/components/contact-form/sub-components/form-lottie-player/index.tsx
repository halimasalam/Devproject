import React from "react"
import * as styles from "./index.css"
import chatBubble from "lotties/chat-bubble.json"
import { Player } from "@lottiefiles/react-lottie-player"

const FormLottiePlayer = () => {
  return (
    <Player
      autoplay
      loop
      controls={false}
      src={chatBubble}
      className={styles.formLottie}
    />
  )
}

export default FormLottiePlayer
