import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import PostList from "../recipe-posts"
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
        filter: { fileAbsolutePath: { regex: "/recipes/" } }
        limit: 3
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
              category
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
      <PostList title="Receitas">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const category = node.frontmatter.category
          return (
            <PostList.Item
              title={title}
              slug={node.fields.slug}
              date={node.frontmatter.date}
              category={category}
              image={node.frontmatter.featuredimage}
            />
          )
        })}
      </PostList>
      <Link to="/receitas">Leia mais >></Link>
    </Container>
  )
}

export default Blog
