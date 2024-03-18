import React from "react"
import ProjectCard from "../ProjectCard"
import { Grid } from "@mui/material"
import tempPic from "../../../../images/new-profile-pic.png"

export default {
  title: "HomePage/ProjectCard",
  component: ProjectCard,
  args: {
    title: "Project 1 title",
    description: "Project 1 descritption",
    category: "Dev",
    featuredImage: {
      image: tempPic,
      altTex: "Some alt text",
    },
    actions: [
      {
        label: "Go here",
        variant: "contained",
        onClick: () => alert("button clicked"),
      },
    ],
  },
  decorators: [
    (Story) => (
      <Grid container component="section">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Story />
        </Grid>
      </Grid>
    ),
  ],
}

export const Default = {
  render: (args) => <ProjectCard {...args} />,
}
