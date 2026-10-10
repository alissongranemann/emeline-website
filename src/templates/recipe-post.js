import React from "react"
import { graphql } from "gatsby"

import Post from "./post"
import Seo from "../components/seo"
import { parseRecipe } from "../components/seo/recipe"

const RecipePostTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Post title={frontmatter.title} image={frontmatter.featuredimage}>
      <section dangerouslySetInnerHTML={{ __html: html }} />
    </Post>
  )
}

export default RecipePostTemplate

export const Head = ({ data: { markdownRemark: post } }) => (
  <Seo
    title={post.frontmatter.title}
    description={post.excerpt}
    image={post.frontmatter.socialImage?.childImageSharp.resize}
    pathname={post.fields.slug}
    type="recipe"
    section={{ name: "Receitas", path: "/receitas/" }}
    date={post.frontmatter.isoDate}
    recipe={{
      category: post.frontmatter.category,
      ...parseRecipe(post.rawMarkdownBody),
    }}
  />
)

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
      rawMarkdownBody
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        isoDate: date
        category
        featuredimage {
          childImageSharp {
            gatsbyImageData(width: 720)
          }
        }
        socialImage: featuredimage {
          childImageSharp {
            resize(
              width: 1200
              height: 1200
              fit: INSIDE
              toFormat: JPG
              quality: 80
            ) {
              src
              width
              height
            }
          }
        }
      }
    }
  }
`
