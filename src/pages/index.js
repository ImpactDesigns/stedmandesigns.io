import React from "react"
import '../assets/index.css'

const pageContainer = {
  height: '100vh',
  // padding: 40,
  background: '#373B5E',
}

const titleText = {
  margin: '0px',
  fontFamily: 'Montserrat',
  fontWeight: 'bold',
  fontSize: '32px',
  lineHeight: '36px',
  textAlign: 'center',
  color: '#FBF7F4',
  border: '1px dashed orange'
}

const subtitleText = {
  margin: '0px',
  fontFamily: 'Source Code Pro',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '16px',
  lineHeight: '20px',
  textTransform: 'uppercase',
  textAlign: 'center',
  color: '#373B5E',
  background: '#FBF7F4',
  border: '1px dashed orange'
}

const bodyText = {
  margin: '0px',
  fontFamily: 'Montserrat',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '16px',
  lineHeight: '20px',
  textAlign: 'center',
  color: '#FBF7F4',
  border: '1px dashed orange'
}

const IndexPage = () => {
  return (
    <main style={pageContainer}>
      <title>Stedman Designs</title>
      <h1 style={titleText}>Stedman Designs</h1>
      <p style={subtitleText}>UX Designer & Fullstack Developer</p>
      <p style={bodyText}>Content is on it's way 😊</p>
    </main>
  )
}

export default IndexPage
