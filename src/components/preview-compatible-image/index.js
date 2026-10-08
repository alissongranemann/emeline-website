import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PreviewCompatibleImage = ({ imageInfo, className }) => {
  const { alt = "", childImageSharp, image } = imageInfo
  const gatsbyImage = getImage(image) || getImage({ childImageSharp })

  if (gatsbyImage) {
    return <GatsbyImage className={className} image={gatsbyImage} alt={alt} />
  }

  if (!!image && typeof image === "string")
    return <img className={className} src={image} alt={alt} />

  return null
}

export default PreviewCompatibleImage
