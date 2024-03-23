import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { PageHeading } from "../components"
import ProjectSection from "./homage-page/projects-section/ProjectSection"
import "../assets/index.css"

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.sitMetadata?.title || "Title"

  return (
    <Layout location={location} title={siteTitle}>
      <PageHeading
        title="My portfolio"
        subtitle="of development & UX design projects"
      />
      <ProjectSection />
    </Layout>
  )
}
export default IndexPage

// TODO: Remove allMarkdownRemark part of query
export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          category
        }
      }
    }
  }
`
