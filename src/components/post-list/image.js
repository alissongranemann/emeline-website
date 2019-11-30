import React from "react"

import { Image } from "./styles"

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = { borderRadius: "5px" }
  const { alt = "", childImageSharp, image } = imageInfo

  if (!!image && !!image.childImageSharp) {
    return (
      <Image style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
    )
  }

  if (!!childImageSharp) {
    return <Image style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === "string")
    return <img style={imageStyle} src={image} alt={alt} />

  return null
}

export default PreviewCompatibleImage
