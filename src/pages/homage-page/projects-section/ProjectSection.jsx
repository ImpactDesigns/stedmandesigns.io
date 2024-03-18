import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ProjectCard from "./ProjectCard"
import { Grid, Box, Typography } from "@mui/material"

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
    <Box sx={{ paddingTop: "24px", paddingBottom: "32px" }}>
      <Typography variant="h4" fontWeight="bold" color="#586165">
        Projects
      </Typography>
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
            <Grid key={project.id} item xs={12} sm={12} md={6} lg={4}>
              <ProjectCard project={project} />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
