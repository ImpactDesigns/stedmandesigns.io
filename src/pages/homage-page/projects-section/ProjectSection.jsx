import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProjectCard from "./ProjectCard"
import { Grid, Box } from "@mui/material"

export default function ProjectSection() {
  const queryData = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date
            description
            category
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  `)

  const projectsNotFromProps = queryData.allMarkdownRemark.nodes

  if (!projectsNotFromProps) {
    return <p>There are no projects</p>
  }

  return (
    <Box px={{ xs: 4, md: 6, lg: 10 }} sx={{ paddingBottom: "32px" }}>
      <Grid
        component="section"
        spacing={2}
        container
        sx={{
          marginTop: "0px",
        }}
      >
        {projectsNotFromProps.map((project) => {
          return (
            <Grid key={project.id} item xs={12} sm={12} md={4} lg={3}>
              <ProjectCard project={project} />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
