import React from "react"
import { graphql } from "gatsby"
import { getSrc } from "gatsby-plugin-image"
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
