import React from "react"
import '../assets/index.css'

const pageContainer = {
  // height: '100vh',
  // padding: 40,
  paddingLeft: '16px',
  paddingRight: '16px',
  paddingTop: 'calc(100vh / 2)',
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gridTemplateRows: 'auto'
}

const contentWrapper = {
  gridColumn: '1 / 13',
  // border: '2px solid dodgerblue'
}

const titleText = {
  margin: '0px',
  fontFamily: 'Montserrat',
  fontWeight: 'bold',
  fontSize: '32px',
  lineHeight: '36px',
  textAlign: 'center',
  color: '#FBF7F4',
  // border: '1px dashed orange'
}

const subtitleText = {
  margin: '12px 0px 60px 0px',
  fontFamily: 'Source Code Pro',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '16px',
  lineHeight: '20px',
  textTransform: 'uppercase',
  textAlign: 'center',
  color: '#373B5E',
  background: '#FBF7F4',
  // border: '1px dashed orange'
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
  // border: '1px dashed orange'
}

const IndexPage = () => {
  return (
    <main style={pageContainer}>
      <title>Stedman Designs</title>
      <div style={contentWrapper}>
        <h1 style={titleText}>Stedman Designs</h1>
        <p style={subtitleText}>UX Designer & Fullstack Developer</p>
        <p style={bodyText}>Content is on it's way 😊</p>
      </div>
    </main>
  )
}

export default IndexPage
