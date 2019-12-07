import React from "react"
import { graphql } from "gatsby"

import Post from "./post"

const RecipePostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const { frontmatter, html } = post

  return (
    <Post
      title={frontmatter.title}
      description={frontmatter.category || post.excerpt}
      image={frontmatter.featuredimage}
    >
      <section dangerouslySetInnerHTML={{ __html: html }} />
    </Post>
  )
}

export default RecipePostTemplate

export const pageQuery = graphql`
  query RecipePostBySlug($slug: String!) {
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
        category
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
