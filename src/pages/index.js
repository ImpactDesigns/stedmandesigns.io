import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import {
  HeroSection,
  FeaturedProjectsSection,
} from "../components/pageComponents/home"
import "../assets/index.css"

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.sitMetadata?.title || "Title"

  return (
    <Layout location={location} title={siteTitle}>
      <HeroSection />
      <FeaturedProjectsSection />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`
