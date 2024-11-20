import { WithBlockType } from "types/custom"
import { BannerProps } from "components/common/banner"
import { AboutContentProps } from "components/about-content"

export { default as Banner } from "components/about-banner"
export { default as AboutPageContent } from "components/about-content"

export type AboutSectionProps = BannerProps | AboutContentProps

export type AboutPageBlockTypes = "Banner" | "AboutPageContent"

export type AboutPageBlock =
  | WithBlockType<"Banner", BannerProps>
  | WithBlockType<"AboutPageContent", AboutContentProps>
