import React from "react"
import ReactVivus from "react-vivus"

interface IconProps {
  id: string
  type: string
  delay?: number
  startType?: "autostart" | "inViewport"
}

const icons = {
  map: "/svg/icon-map.svg",
  message: "/svg/icon-message.svg",
  mail: "/svg/icon-mail.svg",
  world: "/svg/icon-world.svg",
  controller: "/svg/icon-controller.svg",
  archive: "/svg/icon-archive.svg",
  window: "/svg/icon-window.svg",
  server: "/svg/icon-server.svg",
  document: "/svg/icon-document.svg",
}

const Icon = ({ id, type, delay = 0, startType = "autostart" }: IconProps) => {
  return (
    <ReactVivus
      id={id}
      option={{
        file: icons[type],
        animTimingFunction: "EASE",
        start: startType,
        delay,
      }}
    />
  )
}

export default Icon
