import React from "react"
import useAppStore from "../../stores/store"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
import MainSectionSnackbar from "./MainSectionSnackbar"
import MainSectionContactForm from "./MainSectionContactForm"

export default function MainSection() {
  const isSnackbarOpen = useAppStore((state) => state.isSnackbarOpen)
  const setIsSnackbarOpen = useAppStore((state) => state.setIsSnackbarOpen)

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setIsSnackbarOpen()
  }

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleSnackbarClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  )

  return (
    <Box pt="24px" pb="32px" px={{ sm: 6, md: 25, lg: 44 }}>
      <MainSectionSnackbar
        open={isSnackbarOpen}
        autoHideDuration={3500}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        onClose={handleSnackbarClose}
        message="Email sent! Thanks for reaching out."
        action={action}
        ContentProps={{
          style: {
            background: "#fbfcfb",
            fontFamily: "poppins",
            color: "#586165",
            border: "2px solid rgba(88, 97, 101, 0.4)",
          },
        }}
      />
      <MainSectionContactForm />
    </Box>
  )
}
