import React from "react"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Picture = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile-picture.jpg" }) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Img
      className={className}
      fluid={data.placeholderImage.childImageSharp.fixed}
      alt="Foto da Emeline Abreu"
    />
  )
}

export default Picture
