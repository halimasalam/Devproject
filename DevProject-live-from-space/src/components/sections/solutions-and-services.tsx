import { WithBlockType } from "types/custom"
import { BannerProps } from "components/common/banner"
import { ServicesContentProps } from "components/services-content"
import { ServicesContactProps } from "components/services-contact"

export { default as Banner } from "components/services-banner"
export { default as ServicePageContent } from "components/services-content"
export { default as ContactPageContent } from "components/services-contact"

export type ServicesSectionProps =
  | BannerProps
  | ServicesContactProps
  | ServicesContactProps

export type ServicesPageBlockTypes =
  | "Banner"
  | "ServicePageContent"
  | "ContactPageContent"

export type ServicesPageBlock =
  | WithBlockType<"Banner", BannerProps>
  | WithBlockType<"ServicePageContent", ServicesContentProps>
  | WithBlockType<"ContactPageContent", ServicesContactProps>
