import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Image = ({ className }) => (
  <StaticImage
    src="../../images/logo.png"
    width={200}
    className={className}
    alt="Logo da Emeline Abreu"
  />
)

export default Image
