import React from "react"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActionArea from "@mui/material/CardActionArea"

export default function ProjectCard({ project, onClick }) {
  const { title, description, projectFor } =
    project && project.frontmatter ? project.frontmatter : {}

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
        sx={{
          padding: "24px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "stretch",
        }}
        onClick={onClick}
      >
        <Box pb="8px">
          <Typography variant="body2" color="#586165" fontFamily="poppins">
            {projectFor}
          </Typography>
          <Typography
            variant="h6"
            color="#586165"
            fontWeight="bold"
            fontFamily="poppins"
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <Typography variant="body1" color="#586165" fontFamily="poppins">
            {description}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  )
}
