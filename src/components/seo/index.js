/**
 * Page metadata rendered through Gatsby's Head API: export a `Head` from a
 * page or template and return <Seo /> from it.
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { getStructuredData } from "./schema"

// static/og-image.png: the logo on a 1200x630 canvas, for pages without a
// picture of their own
const DEFAULT_IMAGE = { src: `/og-image.png`, width: 1200, height: 630 }

const ARTICLE_TYPES = [`post`, `recipe`, `ebook`]

// descriptions shorter than this say too little in a search result
const MIN_DESCRIPTION_LENGTH = 50

/**
 * The description written in the CMS when it is long enough to work as a
 * search snippet, otherwise the excerpt of the content.
 */
export const pickDescription = (description, excerpt) => {
  const text = (description || ``).trim()

  return text.length >= MIN_DESCRIPTION_LENGTH || !excerpt ? text : excerpt
}

const Seo = ({
  title,
  description = ``,
  image,
  pathname = `/`,
  type = `website`,
  date,
  section,
  recipe,
  noindex = false,
}) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  const { siteMetadata } = site
  const { siteUrl } = siteMetadata
  const pageTitle = title.trim()
  // client-side navigation hands over an already percent-encoded pathname,
  // server rendering the raw one: normalize both to a valid URL
  const url = `${siteUrl}${encodeURI(decodeURI(pathname))}`
  const { src, width, height } = image || DEFAULT_IMAGE
  const imgUrl = `${siteUrl}${src}`
  const metaDescription = (description || siteMetadata.description).trim()
  const isArticle = ARTICLE_TYPES.includes(type)

  const structuredData = {
    "@context": `https://schema.org`,
    "@graph": getStructuredData({
      type,
      siteUrl,
      siteTitle: siteMetadata.title,
      siteDescription: siteMetadata.description.trim(),
      url,
      title: pageTitle,
      description: metaDescription,
      image: imgUrl,
      date,
      section,
      recipe,
    }),
  }

  return (
    <>
      <title>{`${pageTitle} | ${siteMetadata.title}`}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={metaDescription} />
      {noindex && <meta name="robots" content="noindex" />}
      <meta property="og:site_name" content={siteMetadata.title} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:type" content={isArticle ? `article` : `website`} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imgUrl} />
      {width && <meta property="og:image:width" content={width} />}
      {height && <meta property="og:image:height" content={height} />}
      {isArticle && date && (
        <meta property="article:published_time" content={date} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imgUrl} />
      {!noindex && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </>
  )
}

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  // site-relative image, e.g. the `resize` field of an ImageSharp node
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  pathname: PropTypes.string,
  type: PropTypes.oneOf([`website`, `home`, `post`, `recipe`, `ebook`]),
  // ISO 8601
  date: PropTypes.string,
  // listing the page belongs to, for the breadcrumb trail
  section: PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }),
  recipe: PropTypes.shape({
    category: PropTypes.string,
    ingredients: PropTypes.arrayOf(PropTypes.string),
    instructions: PropTypes.string,
  }),
  noindex: PropTypes.bool,
}

export default Seo
