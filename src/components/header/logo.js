import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Image = ({ className }) => (
  <StaticImage
    src="../../images/full-logo.png"
    width={300}
    className={className}
    alt="Logo da Emeline Abreu"
  />
)

export default Image
