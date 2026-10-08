import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Fade, Zoom } from "../common/reveal"
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
        sort: { frontmatter: { date: DESC } }
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
                  gatsbyImageData(width: 400, quality: 100)
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
