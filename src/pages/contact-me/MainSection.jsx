import React from "react"
import emailjs from "emailjs-com"
import useAppStore from "../../stores/store"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
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

  const handleChange = (e, setter) => {
    setter(e.target.value)
  }

  function sendMessage(e) {
    e.preventDefault()

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
          console.log("SUCCESS!", response.status, response.text)
        },
        function (err) {
          console.error(err)
        }
      )

    setContactFormEmailInput("")
    setContactFormNameInput("")
    setContactFormMessageInput("")
  }

  return (
    <Box pt="24px">
      <form>
        <Grid container>
          <Grid item xs={12} pb={1}>
            <Typography variant="h6" color="#586165" fontFamily="poppins">
              Hey Stedman,
            </Typography>
          </Grid>
          <Grid item xs={12} pb={4}>
            <TextField
              id="contactFormMessage"
              name={"contactFormMessage"}
              label="Write your message here..."
              aria-label="Write your message here"
              fullWidth
              multiline
              onChange={(e) => handleChange(e, setContactFormMessageInput)}
            />
          </Grid>
          <Grid item pb={1} xs={12}>
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
              fullWidth
              onChange={(e) => handleChange(e, setContactFormNameInput)}
            />
          </Grid>
          <Grid item xs={12} pb={2}>
            <TextField
              id="contactFormEmail"
              name={"contactFormEmail"}
              label="Your email..."
              aria-label="Email"
              fullWidth
              onChange={(e) => handleChange(e, setContactFormEmailInput)}
              inputProps={{ background: "pink", border: "2px solid red" }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="outlined"
              onClick={(e) => sendMessage(e)}
              size="large"
              sx={{
                color: "#586165",
                borderColor: "rgba(88, 97, 101, 0.4)",
                "&:hover": {
                  color: "#1565c0",
                },
              }}
            >
              Send email
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}
