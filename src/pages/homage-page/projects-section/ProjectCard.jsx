import React from "react"
import { navigate } from "gatsby"
import { Card, CardActionArea, Typography, Box } from "@mui/material"

export default function ProjectCard({ project }) {
  const { title, description } = project.frontmatter

  return (
    <Card
      sx={{
        height: "100%",
        background: "none",
        border: "2px solid rgba(88, 97, 101, .4)",
        borderRadius: "8px",
        boxShadow: "none",
      }}
    >
      <CardActionArea
        sx={{ padding: "24px" }}
        onClick={() => navigate(project.fields.slug)}
      >
        <Box pb="8px">
          <Typography variant="h6" color="#586165" fontWeight="bold">
            {title}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" color="#586165">
            {description}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  )
}
