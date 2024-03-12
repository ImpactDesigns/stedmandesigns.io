import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"

export default function ProjectPage({
  data: { previous, next, site, markdownRemark: project },
  location,
}) {
  const siteTitle = site.siteMetadata?.title || `A Title`

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{project.frontmatter.title}</h1>
          <p>{project.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: project.html }}
          itemProp="articleBody"
        />
        <hr />
        {/* <footer>
          <Bio />
        </footer> */}
      </article>
      <nav className="blog-post-nav">
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
      </nav>
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
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        category
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
