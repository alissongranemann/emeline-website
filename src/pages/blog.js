import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import { Fade } from "../components/common/reveal"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PostList from "../components/blog-posts"

const Container = styled.div`
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
          <Fade>
            <PostList title="Blog" headingLevel="h1">
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

export const Head = ({ location }) => (
  <Seo
    title="Blog de nutrição"
    description="Artigos da nutricionista Emeline Abreu sobre alimentação saudável, emagrecimento, saúde intestinal, saúde da mulher e nutrição no dia a dia."
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
      filter: { fileAbsolutePath: { regex: "/blog/" } }
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
                gatsbyImageData(width: 400)
              }
            }
          }
        }
      }
    }
  }
`
