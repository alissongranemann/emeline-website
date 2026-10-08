/**
 * Page metadata rendered through Gatsby's Head API: export a `Head` from a
 * page or template and return <Seo /> from it.
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { getSrc } from "gatsby-plugin-image"
import { FACEBOOK_URL, INSTAGRAM_URL } from "../../config/variables"

const author = {
  "@type": "Person",
  name: "Emeline Abreu",
  sameAs: [FACEBOOK_URL, INSTAGRAM_URL],
}

const getSchemaOrgJSONLD = ({
  isPost,
  url,
  title,
  image,
  description,
  date,
  siteMetadata,
}) => {
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url,
    name: title,
    alternateName: siteMetadata.title,
    author,
  }

  if (!isPost) {
    return [website]
  }

  return [
    website,
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@id": url,
            name: title,
            image,
          },
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      url,
      name: title,
      alternateName: siteMetadata.title,
      headline: title,
      image: {
        "@type": "ImageObject",
        url: image,
      },
      description,
      author,
      publisher: {
        "@type": "Organization",
        url: siteMetadata.siteUrl,
        name: "Emeline Abreu",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": url,
      },
      datePublished: date,
    },
  ]
}

const Seo = ({
  title,
  description = ``,
  image,
  pathname = `/`,
  isPost = false,
  date,
}) => {
  const { site, logo } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 1200, height: 1200)
        }
      }
    }
  `)

  const { siteMetadata } = site
  // client-side navigation hands over an already percent-encoded pathname,
  // server rendering the raw one: normalize both to a valid URL
  const url = `${siteMetadata.siteUrl}${encodeURI(decodeURI(pathname))}`
  const imgUrl = `${siteMetadata.siteUrl}${image || getSrc(logo)}`
  const metaDescription = description || siteMetadata.description

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    isPost,
    url,
    title,
    image: imgUrl,
    description: metaDescription,
    date,
    siteMetadata,
  })

  return (
    <>
      <title>{`${title} | ${siteMetadata.title}`}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={metaDescription} />
      <meta name="image" content={imgUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </>
  )
}

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  // site-relative image path, e.g. from getSrc()
  image: PropTypes.string,
  pathname: PropTypes.string,
  isPost: PropTypes.bool,
  // ISO 8601
  date: PropTypes.string,
}

export default Seo
