import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"

const Background = ({ className, children }) => {
  const { background } = useStaticQuery(
    graphql`
      query {
        background: file(relativePath: { eq: "services-background.jpg" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const backgroundFluidImageStack = [
    background.childImageSharp.fluid,
    `linear-gradient(to right bottom, rgba(182, 82, 240, 0.9), rgba(99, 0, 179, 0.9))`,
  ].reverse()

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={backgroundFluidImageStack}
    >
      {children}
    </BackgroundImage>
  )
}

export default Background
