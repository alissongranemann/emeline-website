import React from "react"
import { graphql } from "gatsby"
import { getSrc } from "gatsby-plugin-image"
import styled from "styled-components"

import Image from "../components/preview-compatible-image"
import Post from "./post"
import Seo from "../components/seo"
import Card from "../components/common/card"

const StyledCard = styled(Card)`
  width: 12em;
  border-radius: unset;
  text-align: center;
  background: #4b434d;

  p {
    color: #fff;
    font-weight: 600;
    margin: 0.5em 0;
  }
`

const Link = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2.5em 0;
  text-decoration: none;
`

const Small = styled.small`
  display: inline-block;
  margin-bottom: 2.5em;
`

const EbookPostTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  const { title, cover, date, file } = frontmatter

  return (
    <Post title={title}>
      <Small>{date}</Small>
      <section dangerouslySetInnerHTML={{ __html: html }} />
      <Link href={file.publicURL} download>
        <StyledCard>
          <Image
            imageInfo={{
              image: cover,
              alt: `ebook ${title}`,
            }}
          />
          <p>Clique para baixar</p>
        </StyledCard>
      </Link>
    </Post>
  )
}

export default EbookPostTemplate

export const Head = ({ data: { markdownRemark: post } }) => (
  <Seo
    title={post.frontmatter.title}
    description={post.excerpt}
    image={getSrc(post.frontmatter.cover)}
    pathname={post.fields.slug}
    isPost
    date={post.frontmatter.isoDate}
  />
)

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
        isoDate: date
        cover {
          childImageSharp {
            gatsbyImageData(width: 250, quality: 100)
          }
        }
        file {
          publicURL
        }
      }
    }
  }
`
