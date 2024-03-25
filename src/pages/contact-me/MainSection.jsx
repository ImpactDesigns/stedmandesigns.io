import React from "react"
import emailjs from "emailjs-com"
import useAppStore from "../../stores/store"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Snackbar from "@mui/material/Snackbar"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
import { Button } from "../../components"

export default function MainSection() {
  const contactFormEmailInput = useAppStore(
    (state) => state.contactFormEmailInput
  )
  const setContactFormEmailInput = useAppStore(
    (state) => state.setContactFormEmailInput
  )
  const contactFormNameInput = useAppStore(
    (state) => state.contactFormNameInput
  )
  const setContactFormNameInput = useAppStore(
    (state) => state.setContactFormNameInput
  )
  const contactFormMessageInput = useAppStore(
    (state) => state.contactFormMessageInput
  )
  const setContactFormMessageInput = useAppStore(
    (state) => state.setContactFormMessageInput
  )
  const isSnackbarOpen = useAppStore((state) => state.isSnackbarOpen)
  const setIsSnackbarOpen = useAppStore((state) => state.setIsSnackbarOpen)
  const isContactFormLoading = useAppStore(
    (state) => state.isContactFormLoading
  )
  const setIsContactFormLoading = useAppStore(
    (state) => state.setIsContactFormLoading
  )

  const handleChange = (e, setter) => {
    setter(e.target.value)
  }

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

  function sendMessage(e) {
    e.preventDefault()

    setIsContactFormLoading()

    const templateParams = {
      from_name: contactFormNameInput,
      from_email: contactFormEmailInput,
      message: contactFormMessageInput,
    }

    emailjs
      .send(
        process.env.GATSBY_EMAILJS_SERVICE_ID,
        process.env.GATSBY_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.GATSBY_EMAILJS_PUBLIC_KEY
      )
      .then(
        function (response) {
          setContactFormEmailInput("")
          setContactFormNameInput("")
          setContactFormMessageInput("")
          console.log(
            `Email sent to: ${process.env.GATSBY_EMAILJS_USER_ID}.`,
            response.status,
            response.text
          )
          setIsContactFormLoading()
          setIsSnackbarOpen()
        },
        function (err) {
          console.error(err)
        }
      )
  }

  return (
    <Box pt="24px" pb="32px" px={{ sm: 6, md: 25, lg: 44 }}>
      <Snackbar
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
      <form>
        <Grid container>
          <Grid item xs={12} pb={2}>
            <Typography variant="h6" color="#586165" fontFamily="poppins">
              Hey Stedman,
            </Typography>
          </Grid>
          <Grid item xs={12} pb={4}>
            <TextField
              id="contactFormMessage"
              name={"contactFormMessage"}
              label="Write your message here"
              aria-label="Write your message here"
              value={contactFormMessageInput}
              fullWidth
              multiline
              inputProps={{ style: { fontFamily: "poppins" } }}
              InputLabelProps={{ style: { fontFamily: "poppins" } }}
              onChange={(e) => handleChange(e, setContactFormMessageInput)}
            />
          </Grid>
          <Grid item pb={2} xs={12}>
            <Typography variant="h6" color="#586165" fontFamily="poppins">
              Regards,
            </Typography>
          </Grid>
          <Grid item xs={12} pb={2}>
            <TextField
              id="contactFormName"
              name={"contactFormName"}
              label="Your name..."
              aria-label="Name"
              value={contactFormNameInput}
              fullWidth
              inputProps={{ style: { fontFamily: "poppins" } }}
              InputLabelProps={{ style: { fontFamily: "poppins" } }}
              onChange={(e) => handleChange(e, setContactFormNameInput)}
            />
          </Grid>
          <Grid item xs={12} pb={0}>
            <Box height="5.5rem">
              <TextField
                id="contactFormEmail"
                name={"contactFormEmail"}
                label="Your email..."
                aria-label="Email"
                value={contactFormEmailInput}
                fullWidth
                inputProps={{ style: { fontFamily: "poppins" } }}
                InputLabelProps={{ style: { fontFamily: "poppins" } }}
                onChange={(e) => handleChange(e, setContactFormEmailInput)}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              onClick={(e) => sendMessage(e)}
              size="large"
              sx={{
                fontFamily: "poppins",
                color: "#586165",
                borderColor: "rgba(88, 97, 101, 0.4)",
                "&:hover": {
                  color: "#1565c0",
                },
              }}
            >
              {!isContactFormLoading ? "Send email" : "Sending..."}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}
