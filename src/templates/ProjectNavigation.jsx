import React from "react"
import { navigate } from "gatsby"
import { Button } from "../components"
import { Box, Typography } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

export default function ProjectNavigation({
  navigationOptions: { previous, next },
}) {
  return (
    <Box component="nav" sx={{ paddingBottom: "12px" }}>
      <ul
        style={{
          display: `flex`,
          gap: "12px",
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          <Box py="12px" sx={{ minHeight: "36px" }}>
            {previous.slug && (
              <Button
                variant="text"
                onClick={() => navigate(`${previous.slug}`)}
                sx={{
                  fontWeight: "bold",
                  color: "#586165",
                  gap: "8px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "hidden",
                }}
                aria-label={"Go to previous project"}
                role="button"
              >
                <ArrowBackIcon />
                <Typography
                  variant="body1"
                  pt="2px"
                  fontWeight="medium"
                  color="#586165"
                  fontFamily="poppins"
                  maxWidth={{ xs: "100px", sm: "180px" }}
                  sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {previous.label}
                </Typography>
              </Button>
            )}
          </Box>
        </li>
        <li>
          <Box
            py="12px"
            sx={{
              minHeight: "36px",
            }}
          >
            {next.slug && (
              <Button
                variant="text"
                onClick={() => navigate(`${next.slug}`)}
                sx={{
                  fontWeight: "bold",
                  color: "#586165",
                  gap: "8px",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "hidden",
                }}
                aria-label={"Go to next project"}
                role="button"
              >
                <Typography
                  variant="body1"
                  pt="2px"
                  fontWeight="medium"
                  color="#586165"
                  fontFamily="poppins"
                  maxWidth={{ xs: "100px", sm: "180px", md: "100%" }}
                  sx={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {next.label}
                </Typography>
                <ArrowForwardIcon />
              </Button>
            )}
          </Box>
        </li>
      </ul>
    </Box>
  )
}
