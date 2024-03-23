import React from "react"
import { graphql, useStaticQuery, navigate } from "gatsby"
// import useAppStore from "../../../stores/store"
import ProjectCard from "./ProjectCard"
import { Grid, Box, Typography } from "@mui/material"

export default function ProjectSection() {
  // const setIsModalOpen = useAppStore((state) => state.setIsModalOpen)
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
            description
            projectFor
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

  // featuredImage {
  //   childImageSharp {
  //     fluid(maxWidth: 750) {
  //       ...GatsbyImageSharpFluid
  //     }
  //     fixed(width: 80, height: 46) {
  //       ...GatsbyImageSharpFixed
  //     }
  //   }
  // }

  const projectsFromQueryData = queryData.allMarkdownRemark.nodes

  if (!projectsFromQueryData) {
    return <p>There are no projects</p>
  }

  return (
    <Box sx={{ paddingTop: "24px", paddingBottom: "32px" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        color="#586165"
        fontFamily="poppins"
      >
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
        {projectsFromQueryData &&
          projectsFromQueryData.map((project) => {
            return (
              <Grid key={project.id} item xs={12} sm={12} md={6} lg={4}>
                <ProjectCard
                  project={project}
                  onClick={() => navigate(project.fields.slug)}
                />
              </Grid>
            )
          })}
      </Grid>
    </Box>
  )
}
