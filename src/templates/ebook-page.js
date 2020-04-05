import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import PreviewImage from "../components/preview-compatible-image"
import Post from "./post"

export const Image = styled(PreviewImage)`
  width: 15em;
  max-height: 25rem;
  object-fit: cover;
  margin-bottom: 0.4em;
`

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2.5em 0;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const Small = styled.small`
  display: inline-block;
  margin-bottom: 2.5em;
`

const EbookPostTemplate = ({ data }) => {
  const post = data.markdownRemark
  const {
    frontmatter,
    html,
    fields: { slug },
    excerpt,
  } = post
  const { title, cover, date, file } = frontmatter

  return (
    <Post title={title} description={excerpt} date={date} slug={slug}>
      <Small>{date}</Small>
      <section dangerouslySetInnerHTML={{ __html: html }} />
      <Link href={file.publicURL} download>
        <Image
          imageInfo={{
            image: cover,
            alt: `featured image thumbnail for post ${title}`,
          }}
        />
        Download
      </Link>
    </Post>
  )
}

export default EbookPostTemplate

export const pageQuery = graphql`
  query EbookPostBySlug($slug: String!) {
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
        cover {
          childImageSharp {
            fluid(maxWidth: 150, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        file {
          publicURL
        }
      }
    }
  }
`
