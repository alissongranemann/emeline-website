import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PreviewImage from "../components/preview-compatible-image"

export const Container = styled.div`
  min-height: 75vh;
  margin-bottom: 50px;
  padding: 50px 10%;

  h1 {
    margin-bottom: 0.25rem;
  }

  small {
    display: inline-block;
    margin-bottom: 2.5rem;
  }
`

export const Image = styled(PreviewImage)`
  width: 100%;
  max-height: 25rem;
  margin-bottom: 5rem;
`
const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const { frontmatter, html } = post
  const { previous, next } = pageContext

  return (
    <Layout>
      <Container>
        <SEO
          title={frontmatter.title}
          description={frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            {frontmatter.featuredimage && (
              <Image
                imageInfo={{
                  image: frontmatter.featuredimage,
                  alt: `featured image thumbnail for post ${frontmatter.title}`,
                }}
              />
            )}
            <h1>{frontmatter.title}</h1>
            <small>{frontmatter.date}</small>
          </header>
          <section dangerouslySetInnerHTML={{ __html: html }} />
          <hr />
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Container>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        description
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1080, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
