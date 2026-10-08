import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Fade, Zoom } from "../common/reveal"
import PostList from "../recipe-posts"
import { Container, StyledLink as Link } from "./styles"

const Recipes = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
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
        <PostList title="Receitas">
          <Zoom>
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
          </Zoom>
        </PostList>
        <Link to="/receitas">Leia mais >></Link>
      </Fade>
    </Container>
  )
}

export default Recipes
