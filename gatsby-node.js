const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const { createRedirect } = actions

  createRedirect({
    fromPath: "https://sotos-nakis.netlify.com/*",
    toPath: "https://sotosnakis.com/:splat",
    isPermanent: true
  })

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsCollection {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsCollection.edges.map(({ node: collection }) => {
        createPage({
          path: `collection/${collection.slug}`,
          component: path.resolve(`./src/templates/collection.js`),
          context: {
            slug: collection.slug,
          },
        })
      })
      resolve()
    })
  })
}