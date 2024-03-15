import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import { HeroSection } from "../components/pageComponents/home"
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
  Grid,
} from "@mui/material"
import "../assets/index.css"

const IndexPage = ({ data, location }) => {
  const siteTitle = data.site.sitMetadata?.title || "Title"
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <HeroSection />
      <Grid
        container
        spacing={6}
        component="section"
        className="px-24"
        sx={{ border: "2px solid red" }}
      >
        {posts.map((post) => {
          const title = post.frontmatter.title || post.fields.slug
          const projectImage = post.frontmatter.featuredImage

          return (
            <Grid item xs={12} md={6} lg={4} key={post.fields.slug}>
              <Card
                raised
                sx={{
                  height: "100%",
                  background: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <CardMedia
                    component="img"
                    height="194"
                    image={
                      projectImage && projectImage.childImageSharp.fluid.src
                    }
                    alt="project image"
                    sx={{ maxHeight: "200px" }}
                  />
                  <CardContent>
                    <Typography>{title}</Typography>
                    <Typography>{post.frontmatter.description}</Typography>
                    <Typography>{post.frontmatter.category}</Typography>
                  </CardContent>
                </div>
                <CardActions>
                  <Button
                    variant="contained"
                    onClick={() => alert("Button clicked.")}
                  >
                    Learn more
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )
        })}
      </Grid>
      {/* <FeaturedProjectsSection /> */}
    </Layout>
  )
}

export default IndexPage

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
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 750) {
                ...GatsbyImageSharpFluid
              }
              fixed(width: 80, height: 46) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
