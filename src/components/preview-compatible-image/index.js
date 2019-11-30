import React from "react"
import Image from "gatsby-image"

const PreviewCompatibleImage = ({ imageInfo, className }) => {
  const { alt = "", childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Image
        className={className}
        fluid={image.childImageSharp.fluid}
        alt={alt}
      />
    )
  }

  if (!!childImageSharp) {
    return (
      <Image className={className} fluid={childImageSharp.fluid} alt={alt} />
    )
  }

  if (!!image && typeof image === "string")
    return <img className={className} src={image} alt={alt} />

  return null
}

export default PreviewCompatibleImage
