import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"

const Background = ({ className, children }) => {
  const { background } = useStaticQuery(
    graphql`
      query {
        background: file(relativePath: { eq: "background.jpg" }) {
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
    `linear-gradient(to right bottom, rgba(49, 18, 49, 1), rgba(106, 27, 154, 0.9))`,
  ].reverse()

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={backgroundFluidImageStack}
      alt="Frutas sobre a mesa"
    >
      {children}
    </BackgroundImage>
  )
}

export default Background
