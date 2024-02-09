import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { Section, Card, Button } from "../../../../components"
import CardImage from "./CardImage"
import ProjectLinks from "./ProjectLinks"
import projectsList from "../../../../assets/projectsList"

const StyledSection = styled(Section)`
  position: relative;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  gap: 20px;

  & > div:last-child {
    margin-bottom: 0px;
  }

  @media (min-width: 1024px) {
    gap: 32px;
  }
`

const Wrapper = styled("div")`
  position: relative;
  box-sizing: border-box;
  grid-column: span 12;

  @media (min-width: 576px) {
    grid-column: span 6;
  }

  @media (min-width: 1024px) {
    grid-column: span 6;
  }

  @media (min-width: 1200px) {
    grid-column: span 4;
  }

  @media (min-width: 1600px) {
    grid-column: span 3;
  }
`

const H4 = styled("h4")`
  margin: 0px;
  position: relative;
  box-sizing: border-box;
  grid-column: span 12;
  font-size: 24px;
  line-height: 28px;
  color: #586165;
`

const CardTitle = styled("h4")`
  position: relative;
  box-sizing: border-box;
  color: #586165;
  margin: 0px 0px 8px 0px;
`

const CardDescription = styled("p")`
  margin: 0px 0px 0px 0px;
  position: relative;
  box-sizing: border-box;
  display: block;
  font-weight: 400;
  color: #586165;
  color: rgba(88, 97, 101, 0.8);
  font-size: 15px;
  line-height: 20px;
`

export default function PreviewSection() {
  return (
    <StyledSection>
      <H4>Dev projects</H4>
      {projectsList.map((project, idx) => (
        <Wrapper key={idx}>
          <Card>
            <div>
              <CardImage image={project.previewImage} />
              <CardTitle>{project.title}</CardTitle>
              <div
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  margin: "0px 0px 16px 0px",
                  height: "80px",
                  maxHeight: "80px",
                  overflow: "hidden",
                }}
              >
                <CardDescription>{project.description}</CardDescription>
              </div>
              <ProjectLinks links={project.projectLinks} />
              <Button
                onClick={() => navigate(project.projectPath)}
                label="See more"
              ></Button>
            </div>
          </Card>
        </Wrapper>
      ))}
      <Wrapper>
        <Card style={{ height: "100%" }}>
          <div
            style={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <CardImage image={null} />
              <CardTitle>Other dev projects</CardTitle>
              <div
                style={{
                  boxSizing: "border-box",
                  position: "relative",
                  margin: "0px 0px 0px 0px",
                  height: "80px",
                  maxHeight: "80px",
                  overflow: "hidden",
                }}
              >
                <CardDescription>
                  Click the button to see my other projects.
                </CardDescription>
              </div>
            </div>
            <Button
              onClick={() => navigate("/dev-projects")}
              label="View projects"
            />
          </div>
        </Card>
      </Wrapper>
    </StyledSection>
  )
}
