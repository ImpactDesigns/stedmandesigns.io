import React from "react"
import Layout from '../components/Layout'
import { HomeContent, HeroSection } from '../components/home'
import '../assets/index.css'

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <HomeContent />
    </Layout>
  )
}

export default IndexPage