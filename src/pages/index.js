import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import HeroSection from "./homage-page/hero-section/HeroSection"
import ProjectSection from "./homage-page/projects-section/ProjectSection"
import "../assets/index.css"

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.sitMetadata?.title || "Title"

  return (
    <Layout location={location} title={siteTitle}>
      <HeroSection />
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
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 750) {
                ...GatsbyImageSharpFluid
              }
              fixed(width: 80, height: 46) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
