import React from "react"
import { navigate } from "gatsby"
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

export default function BackButton({ pageTitle }) {
  return (
    <Box py="12px" sx={{ minHeight: "36px" }}>
      {pageTitle !== "My portfolio" && (
        <Button
          size="small"
          aria-label="back"
          sx={{
            color: "#586165",
            gap: "8px",
            paddingLeft: "0px",
            paddingRight: "0px",
          }}
          onClick={() => navigate(-1)}
        >
          <ArrowBackIcon />
          <Typography
            variant="body1"
            pt="2px"
            fontWeight="medium"
            color="#586165"
            fontFamily="poppins"
          >
            Back
          </Typography>
        </Button>
      )}
    </Box>
  )
}
