import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { FaDownload } from "react-icons/fa"

import Post from "./post"
import Seo from "../components/seo"
import PdfViewer from "../components/pdf-viewer"
import { buttonStyles } from "../components/common/button"

const Download = styled.a`
  ${buttonStyles}
`

const Actions = styled.div`
  text-align: center;
`

const Small = styled.small`
  display: inline-block;
  margin-bottom: 2.5em;
`

const EbookPostTemplate = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark
  const { title, date, file } = frontmatter

  return (
    <Post title={title}>
      <Small>{date}</Small>
      <section dangerouslySetInnerHTML={{ __html: html }} />
      <PdfViewer url={file.publicURL} title={title} />
      <Actions>
        <Download href={file.publicURL} download>
          <FaDownload aria-hidden="true" />
          Baixar o ebook em PDF
        </Download>
      </Actions>
    </Post>
  )
}

export default EbookPostTemplate

export const Head = ({ data: { markdownRemark: post } }) => (
  <Seo
    title={post.frontmatter.title}
    description={post.excerpt}
    image={post.frontmatter.socialImage?.childImageSharp.resize}
    pathname={post.fields.slug}
    type="ebook"
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
        socialImage: cover {
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
        file {
          publicURL
        }
      }
    }
  }
`
