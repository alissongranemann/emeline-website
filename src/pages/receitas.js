import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import { Fade } from "../components/common/reveal"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostList from "../components/recipe-posts"

const Container = styled.div`
  min-height: 75vh;
  margin-bottom: 50px;
  padding: 50px 10%;
  text-align: center;
`

class RecipesIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const recipes = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Fade>
          <Container>
            <PostList title="Receitas">
              {recipes.map(({ node }) => {
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
          </Container>
        </Fade>
      </Layout>
    )
  }
}

export default RecipesIndex

export const Head = ({ location }) => (
  <Seo
    title="Receitas"
    description="Receitas postadas pela nutricionista Emeline Abreu."
    pathname={location.pathname}
  />
)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { fileAbsolutePath: { regex: "/recipes/" } }
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
`
