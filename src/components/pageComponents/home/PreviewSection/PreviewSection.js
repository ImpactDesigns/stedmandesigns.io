import React from "react";
import styled from "styled-components";
import { navigate } from "gatsby";
import { Section } from "../../..";
import { Card, Button } from "../../..";
// import mobileDesktopSceneImg from '../../../images/desktop-sm-x2.png'
import projectsList from "../../../../assets/projectsList";

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
`;

const Wrapper = styled("div")`
  position: relative;
  box-sizing: border-box;
  grid-column: span 12;

  @media (min-width: 768px) {
    grid-column: span 6;
  }

  @media (min-width: 1024px) {
    grid-column: span 4;
  }

  @media (min-width: 1200px) {
    grid-column: span 3;
  }
`;

const CardTitle = styled("h3")`
  position: relative;
  box-sizing: border-box;
  color: #586165;
  margin: 0px 0px 8px 0px;
`;

const CardDescription = styled("p")`
  position: relative;
  box-sizing: border-box;
  display: block;
  color: #586165;
  font-size: 16px;
  line-height: 24px;
  margin: 0px 0px 0px 0px;
`;

const ImageContainer = styled('div')`
  position: relative;
  box-sizing: border-box;
  margin: 0px 0px 16px 0px;
  width: 100%;
  height: 140px;
  overflow: hidden;
  border-radius: 8px;
  background: ${props => props.image ? `url(${props.image})` : 'lightgreen'};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`

export default function PreviewSection() {
  return (
    <StyledSection>
      {projectsList.map((project, idx) => (
        <Wrapper key={idx}>
          <Card>
            <div>
              <ImageContainer image={project.previewImage} />
              <CardTitle>{project.title}</CardTitle>
              <div
                style={{
                  boxSizing: 'border-box',
                  position: 'relative',
                  maxWidth: "100%",
                  maxHeight: "96px",
                  overflow: "hidden",
                  marginBottom: "24px"
                }}
              >
                <CardDescription>{project.description}</CardDescription>
              </div>
              <Button buttonStyle="secondary" onclick={() => navigate(project.projectPath)} label="View project" isFullWidth={true}></Button>
            </div>
          </Card>
        </Wrapper>
      ))}
    </StyledSection>
  );
}
