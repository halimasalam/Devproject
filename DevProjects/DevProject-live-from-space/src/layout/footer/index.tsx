import React from "react"
import * as styles from "./index.css"
import Logo from "components/common/logo"
import footerAstronaut from "lotties/footer-astronaut.json"
import { graphql, useStaticQuery } from "gatsby"
import { Player } from "@lottiefiles/react-lottie-player"
import { Image } from "types/custom"
import FooterLink, { FooterLinkType } from "./sub-components/footer-link"
import FooterContact from "./sub-components/footer-contact"
import FooterSocials from "./sub-components/footer-socials"
import FooterCopyright from "./sub-components/footer-copyright"
import FooterLinkItem from "./sub-components/footer-link-item"

interface LayoutFooterData {
  title: string
  logo: Image
  phoneNumber: string
  email: string
  twitterLink: string
  facebookLink: string
  instagramLink: string
  footerLinks: FooterLinkType[]
  copyright: string
}

interface LayoutFooter {
  layoutFooter: LayoutFooterData
}

const Footer = () => {
  const { layoutFooter } = useStaticQuery<LayoutFooter>(query)

  return (
    <footer className={styles.footerSection}>
      <Player
        autoplay
        loop
        controls={false}
        src={footerAstronaut}
        className={styles.footerLottieBackground}
      />
      <div className="container">
        <div className={`row ${styles.footerRowWrapper}`}>
          <div
            className={`col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 ${styles.footerColWrapper}`}
          >
            <div className="footer-widget">
              <div className={styles.footerLogo}>
                <Logo src={layoutFooter.logo.url} alt={layoutFooter.logo.alt} />
              </div>
              <div className={styles.footerWidgetContent}>
                <FooterContact
                  phoneNumber={layoutFooter.phoneNumber}
                  email={layoutFooter.email}
                />
                <FooterSocials
                  twitterLink={layoutFooter.twitterLink}
                  facebookLink={layoutFooter.facebookLink}
                  instagramLink={layoutFooter.instagramLink}
                />
              </div>
            </div>
          </div>
          {layoutFooter.footerLinks.map((link) => (
            <FooterLink
              key={link.title}
              data={link}
              linkItems={link.items.map((item) => (
                <FooterLinkItem
                  key={item.title}
                  title={item.title}
                  link={item.link}
                />
              ))}
            />
          ))}
        </div>
        <FooterCopyright copyrightText={layoutFooter.copyright} />
      </div>
    </footer>
  )
}

export default Footer

const query = graphql`
  query LayoutFooter {
    layoutFooter {
      title
      logo {
        url
      }
      phoneNumber
      email
      twitterLink
      facebookLink
      instagramLink
      footerLinks {
        title
        items {
          title
          link
        }
      }
      copyright
    }
  }
`
