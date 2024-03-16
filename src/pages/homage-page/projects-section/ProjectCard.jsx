import React from "react"
import { navigate } from "gatsby"
import moment from "moment"
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
} from "@mui/material"

export default function ProjectCard({ project }) {
  const { title, description, category, date } = project.frontmatter
  const projectImage =
    project.frontmatter.featuredImage.childImageSharp.gatsbyImageData.images
      .fallback.src

  return (
    <Card
      raised
      sx={{
        height: "100%",
        background: "none",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardHeader
        title={title}
        subheader={moment(date).format("MMMM Do, YYYY")}
      />
      <div>
        <CardMedia
          component="img"
          // height="192"
          image={projectImage}
          alt="Featured image"
          sx={{ maxHeight: "140px" }}
        />
        <CardContent>
          <Typography variant="body2">{description}</Typography>
        </CardContent>
      </div>
      <CardActions>
        <Button
          variant="contained"
          onClick={() => navigate(project.fields.slug)}
          sx={{ fontWeight: 'bold' }}
        >
          View
        </Button>
      </CardActions>
    </Card>
  )
}
