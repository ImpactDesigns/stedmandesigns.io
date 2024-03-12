const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)
const projectPageTemplate = path.resolve("./src/templates/project-page.js")

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(sort: { frontmatter: { date: ASC } }, limit: 1000) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `THre was an error loading your blog posts`,
      result.errors
    )

    return
  }

  const projects = result.data.allMarkdownRemark.nodes

  if (projects.length > 0) {
    projects.forEach((project, index) => {
      const previousProjectId = index === 0 ? null : projects[index - 1].id
      const nextProjectId =
        index === projects.length - 1 ? null : projects[index + 1].id

      createPage({
        path: project.fields.slug,
        component: projectPageTemplate,
        context: {
          id: project.id,
          previousProjectId,
          nextProjectId,
        },
      })
    })
  }
}

/**
 * @type {import('gatsby').GatsbyNode['onCreateNode']}
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode })

    createNodeField({
      node,
      name: "slug",
      value,
    })
  }
}

/**
 * @type {import('gatsby').GatsbyNode['createSchemaCustomization']}
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
