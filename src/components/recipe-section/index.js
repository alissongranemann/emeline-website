import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FaArrowRight } from "react-icons/fa"

import { Fade, Zoom } from "../common/reveal"
import PostList from "../recipe-posts"
import { Container, MoreLink } from "./styles"

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
        <MoreLink to="/receitas">
          Ver todas as receitas <FaArrowRight />
        </MoreLink>
      </Fade>
    </Container>
  )
}

export default Recipes
