import React from "react"
import { Box, Typography } from "@mui/material"

export default function HeroSection() {
  return (
    <Box sx={{ paddingTop: "32px", paddingBottom: "32px" }} component="section">
      <Typography
        variant="h1"
        fontWeight="bold"
        fontSize="52px"
        color="#586165"
        fontFamily="poppins"
      >
        My portfolio
      </Typography>
      <Typography
        variant="h5"
        component="p"
        color="rgba(88, 97, 101, .7)"
        fontFamily="poppins"
      >
        of fullstack development & UX Design projects
      </Typography>
    </Box>
  )
}
