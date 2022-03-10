import React from "react"
import Layout from '../components/Layout'
import { HomeContent, HeroSection, PreviewSection } from '../components/home'
import '../assets/index.css'

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <PreviewSection />
      <HomeContent />
    </Layout>
  )
}

export default IndexPage