import React from "react"
import { graphql } from "gatsby"

import Post from "./post"

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const {
    frontmatter,
    fields: { slug },
    html,
  } = post

  return (
    <Post
      title={frontmatter.title}
      description={frontmatter.description || post.excerpt}
      image={frontmatter.featuredimage.childImageSharp.fluid.src}
      date={frontmatter.date}
      slug={slug}
    >
      <small style={{ display: "inline-block", marginBottom: "1.2rem" }}>
        {frontmatter.date}
      </small>
      <section dangerouslySetInnerHTML={{ __html: html }} />
    </Post>
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
      fields {
        slug
      }
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
