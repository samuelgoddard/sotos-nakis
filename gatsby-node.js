const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

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