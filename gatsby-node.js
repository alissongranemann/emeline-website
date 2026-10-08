const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const createContentPages = async (
  { graphql, actions },
  { folder, template }
) => {
  const { createPage } = actions

  const component = path.resolve(template)
  const result = await graphql(
    `
      query ($regex: String!) {
        allMarkdownRemark(
          sort: { frontmatter: { date: DESC } }
          limit: 1000
          filter: { fileAbsolutePath: { regex: $regex } }
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `,
    { regex: `/${folder}/` }
  )

  if (result.errors) {
    throw result.errors
  }

  const posts = result.data.allMarkdownRemark.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.createPages = async args => {
  await Promise.all([
    createContentPages(args, {
      folder: `blog`,
      template: `./src/templates/blog-post.js`,
    }),
    createContentPages(args, {
      folder: `recipes`,
      template: `./src/templates/recipe-post.js`,
    }),
    createContentPages(args, {
      folder: `ebooks`,
      template: `./src/templates/ebook-page.js`,
    }),
  ])
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// `gatsby develop` doesn't serve .html files from static/, and the CMS page
// is one; production hosting serves it directly
exports.onCreateDevServer = ({ app }) => {
  app.get([`/admin`, `/admin/`], (req, res) => {
    res.sendFile(path.resolve(`static/admin/index.html`))
  })
}
