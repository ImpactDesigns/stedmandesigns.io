import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Box from "@mui/material/Box"
import Layout from "../components/Layout"
import { PageHeading } from "../components"
import ProjectNavigation from "./ProjectNavigation"

const ArticleBodyContainer = styled.div`
  & > h2 {
    padding-bottom: 4px;
    font-size: 52px;
    line-height: 56px;
    font-weight: bold;
    color: #586165;
  }

  & > h3 {
    padding-bottom: 12px;
    font-size: 36px;
    line-height: 40px;
    font-weight: bold;
    color: #586165;
  }

  & > h4 {
    padding-bottom: 8px;
    font-size: 28px;
    line-height: 32px;
    font-weight: bold;
    color: #586165;
  }

  & > h5 {
    padding-bottom: 8px;
    font-size: 20px;
    line-height: 24px;
    font-weight: bold;
    color: #586165;
  }

  & > p {
    padding-bottom: 24px;
    font-size: 18px;
    line-height: 24px;
    color: #586165;
  }

  & > p > .gatsby-resp-image-wrapper {
    // width: 80%;
    maxheight: 300px;
  }

  & > p > a {
    text-decoration: underline;

    &:hover {
      color: #93de4e;
    }
  }
`

export default function ProjectPage({
  data: { previous, next, site, markdownRemark: project },
  location,
}) {
  const siteTitle = site.siteMetadata?.title || `A Title`

  const projectNavigationOptions = {
    next: {
      slug: next && next.fields.slug,
      label: next && next.frontmatter.title,
    },
    previous: {
      slug: previous && previous.fields.slug,
      label: previous && previous.frontmatter.title,
    },
  }

  return (
    <Layout location={location} title={siteTitle}>
      <PageHeading
        title={project.frontmatter.title}
        subtitle="a frontend development project"
      />
      <Box
        pt="48px"
        px={{ lg: 24, xl: 30 }}
        component="article"
        className="project-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <ArticleBodyContainer
          dangerouslySetInnerHTML={{ __html: project.html }}
          itemProp="articleBody"
        />
        <hr />
      </Box>
      <ProjectNavigation navigationOptions={projectNavigationOptions} />

      {/* <nav className="project-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav> */}
    </Layout>
  )
}

export const pageQuery = graphql`
  query ProjectBySlug(
    $id: String!
    $previousProjectId: String
    $nextProjectId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        description
        category
        date(formatString: "MMMM DD, YYYY")
      }
    }
    previous: markdownRemark(id: { eq: $previousProjectId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextProjectId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
