import React, { useEffect, useState } from "react"
import * as styles from "./index.css"
import { Image } from "types/custom"
import SectionHeading from "components/common/section-heading"
import Slider from "react-slick"
import globe from "lotties/globe.json"
import { Player } from "@lottiefiles/react-lottie-player"

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 1000,
  pauseOnHover: true,
  rtl: false,
}

export interface HomeBrandsProps {
  title: string
  description: React.ReactNode
  brandLogos: Image[]
}

export default function HomeBrands(props: HomeBrandsProps) {
  const [, setIsDesktop] = useState(false)
  const [, setIsTablet] = useState(false)
  const [, setIsMobile] = useState(false)

  const handleResize = () => {
    if (typeof window === "undefined") return

    const isDesktop = window.matchMedia("(max-width: 1280px)")
    const isTablet = window.matchMedia("(max-width: 768px)")
    const isMobile = window.matchMedia("(max-width: 480px)")

    setIsDesktop(isDesktop.matches)
    setIsTablet(isTablet.matches)
    setIsMobile(isMobile.matches)

    if (isMobile.matches) settings.slidesToShow = 1
    else if (isTablet.matches) settings.slidesToShow = 2
    else if (isDesktop.matches) settings.slidesToShow = 3
    else settings.slidesToShow = 4
  }

  useEffect(() => {
    globalThis.addEventListener("resize", handleResize)
    return () => {
      globalThis.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section
      id={props.title.toLowerCase().replace(/ /g, "-")}
      className={styles.section}
    >
      <div className="container">
        <SectionHeading
          title={props.title}
          description={props.description}
          lottiePlayer={
            <Player
              autoplay
              loop
              controls={false}
              src={globe}
              className={
                props.title.toLowerCase().includes("clients")
                  ? styles.lottie["alt"]
                  : styles.lottie["default"]
              }
            />
          }
        />
        <Slider
          {...settings}
          rtl={props.title.toLowerCase().includes("clients") ? true : false}
        >
          {props.brandLogos.map((logo) => (
            <img
              key={logo.id}
              className={styles.logoImage}
              src={logo.url}
              alt={logo.alt}
            />
          ))}
        </Slider>
      </div>
    </section>
  )
}
