import { WithBlockType } from "types/custom"
import { BannerProps } from "components/common/banner"

export { default as Banner } from "components/blog-banner"

export type BlogsSectionProps = BannerProps

export type BlogsPageBlockTypes = "Banner"

export type BlogsPageBlock = WithBlockType<"Banner", BannerProps>
