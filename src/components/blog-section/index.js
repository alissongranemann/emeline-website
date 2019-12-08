import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Zoom from "react-reveal/Zoom"
import Fade from "react-reveal/Fade"

import PostList from "../blog-posts"
import { Container, StyledLink as Link } from "./styles"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { fileAbsolutePath: { regex: "/blog/" } }
        limit: 2
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
              description
              featuredimage {
                childImageSharp {
                  fluid(maxWidth: 400, quality: 100) {
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

  const posts = data.allMarkdownRemark.edges

  return (
    <Container>
      <Fade>
        <PostList title="Blog">
          <Zoom>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              const description = node.frontmatter.description || node.excerpt
              return (
                <PostList.Item
                  title={title}
                  slug={node.fields.slug}
                  date={node.frontmatter.date}
                  description={description}
                  image={node.frontmatter.featuredimage}
                />
              )
            })}
          </Zoom>
        </PostList>
        <Link to="/blog">Leia mais >></Link>
      </Fade>
    </Container>
  )
}

export default Blog
