import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Fade from "react-reveal/Fade"

import List from "../ebook-list"
import { Container } from "./styles"

const Ebooks = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fileAbsolutePath: { regex: "/ebooks/" } }
        limit: 5
      ) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "DD/MM/YYYY")
              title
              cover {
                childImageSharp {
                  fluid(maxWidth: 300, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const ebooks = data.allMarkdownRemark.edges

  return (
    <Container>
      <Fade>
        <List title="Ebooks">
          {ebooks.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <List.Item
                title={title}
                slug={node.fields.slug}
                date={node.frontmatter.date}
                image={node.frontmatter.cover}
              />
            )
          })}
        </List>
      </Fade>
    </Container>
  )
}

export default Ebooks
