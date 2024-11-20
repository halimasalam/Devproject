import { IGatsbyImageData } from "gatsby-plugin-image"

export interface Image {
  id: string
  alt: string
  gatsbyImageData: IGatsbyImageData
  url: string
}

export type WithBlockType<BlockType, SectionProps> = {
  id: string
  blocktype: BlockType
} & SectionProps

export type AccordionItemType<T extends string = "", U = unknown> = {
  [key in T]?: U
} & {
  id: string
  title: string
  description: string
}

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}
