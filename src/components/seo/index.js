/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const getSchemaOrgJSONLD = ({
  isPost,
  url,
  title,
  image,
  description,
  date,
  siteMetadata,
}) => {
  const schemaOrgJSONLD = [
    {
      "@context": "http://schema.org",
      "@type": "WebSite",
      url,
      name: title,
      alternateName: siteMetadata.title,
      author: {
        "@type": "Person",
        name: "Emeline Abreu",
        sameAs: [
          "https://www.facebook.com/emeline.abreu",
          "https://www.instagram.com/emelineabreunutri",
        ],
      },
    },
  ]

  return isPost
    ? [
        ...schemaOrgJSONLD,
        {
          "@context": "https://emelineabreunutri.com.br",
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
          "@context": "https://emelineabreunutri.com.br",
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
          author: {
            "@type": "Person",
            name: "Emeline Abreu",
            sameAs: [
              "https://www.facebook.com/emeline.abreu",
              "https://www.instagram.com/emelineabreunutri",
            ],
          },
          publisher: {
            "@type": "Organization",
            url: "https://emelineabreunutri.com.br",
            // logo: siteMetadata.logo,
            name: "Emeline Abreu",
          },
          mainEntityOfPage: {
            "@type": "WebSite",
            "@id": siteMetadata.url,
          },
          date,
        },
      ]
    : schemaOrgJSONLD
}

function SEO({
  description,
  lang,
  meta,
  title,
  image,
  path = "",
  isPost,
  date,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  const url = `${site.siteMetadata.siteUrl}${path}`
  const imgUrl = `${url}${image}`

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    isPost,
    url,
    title,
    image: imgUrl,
    description,
    date,
    siteMetadata: site.siteMetadata,
  })
  const metaDescription = description || site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: imgUrl,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `og:image`,
          content: imgUrl,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `pt-br`,
  meta: [],
  description: ``,
  image: undefined,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
}

export default SEO
