import React from "react"
import Layout from '../components/Layout'
import { HeroSection, PreviewSection } from '../components/pageComponents/home'
import '../assets/index.css'

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <PreviewSection />
    </Layout>
  )
}

export default IndexPage