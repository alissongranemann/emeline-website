const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = "https://emelineabreunutri.com.br",
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
  GATSBY_GA_MEASUREMENT_ID: GA_MEASUREMENT_ID,
} = process.env
const isNetlifyProduction = NETLIFY_ENV === "production"
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL

module.exports = {
  siteMetadata: {
    title: `Emeline Abreu`,
    description: `Nutricionista Emeline Abreu. Nutrição clínica, funcional, comportamental e estética. Atua nas cidades de Araranguá, Curitibanos e Lages, em Santa Catarina. `,
    author: `@alissongranemann`,
    siteUrl,
  },
  plugins: [
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/recipes`,
        name: `recipes`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/ebooks`,
        name: `ebooks`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            // turns CMS paths like /img/foo.jpg (body and frontmatter) into
            // paths relative to the markdown file, so sharp can process them
            resolve: "gatsby-remark-relative-images",
            options: {
              staticFolderName: "static",
              include: ["featuredimage"],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1080,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // gatsby-image used a blurred base64 placeholder; keep the same look
        defaults: { placeholder: `blurred` },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: "*" }],
          },
          "branch-deploy": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
          "deploy-preview": {
            policy: [{ userAgent: "*", disallow: ["/"] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    ...(GA_MEASUREMENT_ID
      ? [
          {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
              trackingIds: [GA_MEASUREMENT_ID],
              pluginConfig: { head: true },
            },
          },
        ]
      : []),
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nutricionista Emeline Abreu`,
        short_name: `Emeline Abreu`,
        start_url: `/`,
        background_color: `#311231`,
        theme_color: `#311231`,
        display: `standalone`,
        icon: `src/images/logo.png`,
      },
    },
    // replaces gatsby-plugin-offline: ships a sw.js that unregisters the
    // service worker previously installed in returning visitors' browsers
    "gatsby-plugin-remove-serviceworker",
  ],
}
