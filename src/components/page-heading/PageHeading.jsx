import React from "react"
import { Box, Typography } from "@mui/material"
import BackButton from "./BackButton"

export default function HeroSection({ title, subtitle }) {
  return (
    <Box sx={{ paddingTop: "32px", paddingBottom: "32px" }} component="section">
      <BackButton pageTitle={title} />
      <Typography
        variant="h1"
        fontWeight="bold"
        fontSize="52px"
        color="#586165"
        fontFamily="poppins"
      >
        {title ? title : "Page title"}
      </Typography>
      <Typography
        variant="h5"
        component="p"
        color="rgba(88, 97, 101, .7)"
        fontFamily="poppins"
      >
        {subtitle ? subtitle : "page subtitle"}
      </Typography>
    </Box>
  )
}
