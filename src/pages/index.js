import React from "react"
import '../assets/index.css'

const subtitleText = {
  margin: '12px 0px 60px 0px',
  fontFamily: 'Source Code Pro',
  textTransform: 'uppercase',
  color: '#373B5E',
  background: '#FBF7F4',
}

const IndexPage = () => {
  return (
    <main className={'page-container'}>
      <title>Stedman Designs</title>
      <div className={'content-wrapper'}>
        <h1>Stedman Designs</h1>
        <p style={subtitleText} className={'subtitle-text'}>UX Designer & Fullstack Developer</p>
        <p>Content is on it's way 😊</p>
      </div>
    </main>
  )
}

export default IndexPage