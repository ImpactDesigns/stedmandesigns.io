import React from "react";
import Layout from "../components/Layout";
import {
  HeroSection,
  PreviewSection,
  FeaturedProjectsSection,
} from "../components/pageComponents/home";
import "../assets/index.css";

const IndexPage = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedProjectsSection />
      <PreviewSection />
    </Layout>
  );
};

export default IndexPage;
