import "./src/styles/global.css"
import emailjs from "emailjs-com"

const onClientEntry = () => {
  const script = document.createElement("script")
  script.src =
    "https://cdn.jsdelivr.net/npm/emailjs-com@2.4.0/dist/email.min.js"
  script.async = true
  document.body.appendChild(script)

  script.onload = () => {
    emailjs.init(process.env.GATSBY_EMAILJS_USER_ID)
    emailjs.init({
      publicKey: process.env.GATSBY_EMAILJS_USER_ID,
      blockHeadless: true
    })
  }
}

export { onClientEntry }
