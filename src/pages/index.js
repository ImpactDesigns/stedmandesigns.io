import React from "react"
import { graphql } from "gatsby"
import useAppStore from "../stores/store"
import Layout from "../components/Layout"
import { Box, Modal, Button, Typography } from "@mui/material"
import { PageHeading } from "../components"
import ProjectSection from "./homage-page/projects-section/ProjectSection"
import "../assets/index.css"

const modalContentStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: "80%",
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
}

const IndexPage = ({ data, location }) => {
  const isModalOpen = useAppStore((state) => state.isModalOpen)
  const setIsModalOpen = useAppStore((state) => state.setIsModalOpen)
  const siteTitle = data.site.sitMetadata?.title || "Title"

  return (
    <Layout location={location} title={siteTitle}>
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen()}
        disableRestoreFocus
      >
        <Box
          sx={{
            ...modalContentStyle,
            width: { xs: "80%", md: "60%", lg: "50%", xl: "40%" },
          }}
        >
          <Typography variant="h5" component="p" color="#586165">
            Heads up!
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{ color: "rgba(88, 97, 101, .9)" }}
          >
            Throughout the month of March this portfolio is being updated, and I
            am now in the process of assembling content. Check back soon!
          </Typography>
          <Box pt={"12px"}>
            <Button
              variant="text"
              onClick={() => setIsModalOpen()}
              sx={{ padding: "6px 0px", color: "#586165" }}
            >
              Close modal
            </Button>
          </Box>
        </Box>
      </Modal>
      <PageHeading
        title="My portfolio"
        subtitle="of development & UX design projects"
      />
      <ProjectSection />
    </Layout>
  )
}
export default IndexPage

// TODO: Remove allMarkdownRemark part of query
export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          category
        }
      }
    }
  }
`
