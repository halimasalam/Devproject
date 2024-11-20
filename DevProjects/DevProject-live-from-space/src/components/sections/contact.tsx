import { WithBlockType } from "types/custom"
import { BannerProps } from "components/common/banner"
import { ContactContentProps } from "components/contact-content"

export { default as Banner } from "components/contact-banner"
export { default as ContactPageContent } from "components/contact-content"

export type ContactSectionProps = BannerProps | ContactContentProps

export type ContactPageBlockTypes =
  | "Banner"
  | "ContactPageContent"
  | "ContactPageForm"

export type ContactPageBlock =
  | WithBlockType<"Banner", BannerProps>
  | WithBlockType<"ContactPageContent", ContactContentProps>
