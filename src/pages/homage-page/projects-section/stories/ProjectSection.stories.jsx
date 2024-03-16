import React from "react"
import ProjectSection from "../ProjectSection"
import tempPic1 from "../../../../images/new-profile-pic.png"
import tempPic2 from "../../../../images/project-vaxx-screen-360px-1.5x.jpg"

const tempProjects = [
  {
    title: "Project 1 title",
    description:
      "Project 1 descritption with a lot more copy than the other one to cause some wrapping behavior.",
    category: "Dev",
    featuredImage: {
      image: tempPic1,
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
  {
    title: "Project 2 title",
    description: "Project 2 descritption",
    category: "Dev",
    featuredImage: {
      image: tempPic2,
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
]

export default {
  title: "HomePage/ProjectSection",
  component: ProjectSection,
  args: {
    projects: tempProjects,
  },
}

export const Default = {
  render: (args) => <ProjectSection {...args} />,
}
