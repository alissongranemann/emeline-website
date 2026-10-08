import React from "react"
import { graphql } from "gatsby"
import { getSrc } from "gatsby-plugin-image"

import Post from "./post"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Post title={frontmatter.title} image={frontmatter.featuredimage}>
      <small style={{ display: "inline-block", marginBottom: "1.2rem" }}>
        {frontmatter.date}
      </small>
      <section dangerouslySetInnerHTML={{ __html: html }} />
    </Post>
  )
}

export default BlogPostTemplate

export const Head = ({ data: { markdownRemark: post } }) => (
  <Seo
    title={post.frontmatter.title}
    description={post.frontmatter.description || post.excerpt}
    image={getSrc(post.frontmatter.featuredimage)}
    pathname={post.fields.slug}
    isPost
    date={post.frontmatter.isoDate}
  />
)

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
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        isoDate: date
        description
        featuredimage {
          childImageSharp {
            gatsbyImageData(width: 1080, quality: 100)
          }
        }
      }
    }
  }
`
