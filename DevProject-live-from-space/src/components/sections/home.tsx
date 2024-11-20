import { WithBlockType } from "types/custom"
import { HomeContentProps } from "components/home-content"
import { ServicesContactProps } from "components/services-contact"

export { default as HomePageContent } from "components/home-content"
export { default as ContactPageContent } from "components/services-contact"

export type SectionProps = HomeContentProps | ServicesContactProps

export type HomePageBlockTypes = "HomePageContent" | "ContactPageContent"

export type HomePageBlock =
  | WithBlockType<"HomePageContent", HomeContentProps>
  | WithBlockType<"ContactPageContent", ServicesContactProps>
