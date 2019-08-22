const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({graphql, actions}) => {
  const {createPage} = actions

  return new Promise((resolve, reject) => {
    const productPageTemplate = path.resolve('src/templates/PropertyPage.js')
    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    slug
                  }
                  id
                }
              }
            }
          }
        `,
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        result.data.allMarkdownRemark.edges.forEach(edge => {
          createPage({
            path: `/properties/${edge.node.frontmatter.slug}/`,
            component: productPageTemplate,
            context: {
              id: edge.node.id,
            },
          })
        })
      }),
    )
  })
}

exports.onCreateWebpackConfig = ({actions}) => {
  actions.setWebpackConfig({
    node: {fs: 'empty'},
  })
}
