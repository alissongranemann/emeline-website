import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Fade from "react-reveal/Fade"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/post-list"

export const Container = styled.div`
  min-height: 75vh;
  margin-bottom: 50px;
  padding: 50px 10%;
  text-align: center;
`

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Container>
          <SEO title="Blog" />
          <Fade>
            <PostList title="Blog">
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
            </PostList>
          </Fade>
        </Container>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
`
