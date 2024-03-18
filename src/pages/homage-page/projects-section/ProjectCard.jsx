import React from "react"
import { Box, Card, CardActionArea, Typography } from "@mui/material"

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
        onClick={() => alert("Card clicked")}
      >
        <Box pb="8px">
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
