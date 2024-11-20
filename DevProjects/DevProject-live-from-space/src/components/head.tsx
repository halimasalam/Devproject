import * as React from "react"

interface HeadProps {
  title: string
  description?: string
  image?: { url: string }
}

export default function Head({ title, description, image }: HeadProps) {
  return (
    <>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="title" content={title} />
      {description && <meta name="description" content={description} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="LiveFromSpace" />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image.url} />}
      <meta name="twitter:card" content="summary" />
      <meta property="twitter:site" content="LiveFromSpace" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image.url} />}
    </>
  )
}
