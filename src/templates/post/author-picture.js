import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Picture = ({ className }) => (
  <StaticImage
    src="../../images/profile-picture.jpg"
    layout="fixed"
    width={40}
    height={40}
    className={className}
    alt="Foto da Emeline Abreu"
  />
)

export default Picture
