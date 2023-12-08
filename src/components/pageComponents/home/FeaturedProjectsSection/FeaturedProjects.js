import React from "react";
import styled from "styled-components";
import { navigate } from "gatsby";
import useAppStore from "../../../../stores/store";
import { Section, Card, Button, Dropdown } from "../../../../components";
import CardImage from "../PreviewSection/CardImage";
import ProjectLinks from "../PreviewSection/ProjectLinks";

const StyledSection = styled(Section)`
  position: relative;
  box-sizing: border-box;

  // & > div:last-child {
  //   margin-bottom: 0px;
  // }

  @media (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (min-width: 1024px) {
    padding-left: 200px;
    padding-right: 200px;
  }
`;

const CardContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  gap: 20px;

  @media (min-width: 1024px) {
    gap: 32px;
  }
`;

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
`;

// const H4 = styled("h4")`
//   margin: 0px;
//   position: relative;
//   box-sizing: border-box;
//   grid-column: span 12;
//   font-size: 24px;
//   line-height: 28px;
//   color: #586165;
// `;

const CardTitle = styled("h4")`
  position: relative;
  box-sizing: border-box;
  color: #586165;
  margin: 0px 0px 8px 0px;
`;

const CardDescription = styled("p")`
  margin: 0px 0px 0px 0px;
  position: relative;
  box-sizing: border-box;
  position: relative;
  box-sizing: border-box;
  display: block;
  font-weight: 400;
  color: #586165;
  color: rgba(88, 97, 101, 0.8);
  font-size: 15px;
  line-height: 20px;
`;

const StyledButton = styled(Button)`
  border-color: dodgerblue;
  color: dodgerblue;

  &:hover {
    background: dodgerblue;
  }

  &:disabled {
    border-color: #586165;
    background: #D9D9D9;
    cursor: not-allowed;
  },
`;

const tempOptions = [
  { label: "Development", value: "dev" },
  { label: "Design", value: "design" },
];

export default function FeaturedProjects() {
  const listOfProjects = useAppStore((state) => state.listOfProjects);
  const featuredProjectType = useAppStore((state) => state.featuredProjectType);
  const setFeaturedProjectType = useAppStore(
    (state) => state.setFeaturedProjectType
  );

  const filtered = listOfProjects.filter(
    (obj) => obj.projectType === featuredProjectType
  );

  return (
    <StyledSection>
      <div style={{ marginBottom: "32px", display: "flex", gap: "16px" }}>
        <div style={{ width: "200px" }}>
          <Dropdown options={tempOptions} isFullWidth tabIndex={0} />
        </div>
      </div>
      <CardContainer>
        {filtered.splice(0, 3).map((project, idx) => (
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
                  buttonStyle="secondary"
                  onclick={() => navigate(project.projectPath)}
                  label="See more"
                  isFullWidth={true}
                />
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
                <CardTitle>
                  {featuredProjectType === "dev"
                    ? "Other dev projects"
                    : "Other design projects"}
                </CardTitle>
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
              <StyledButton
                buttonStyle="secondary"
                onclick={() =>
                  navigate(
                    featuredProjectType === "dev"
                      ? "/dev-projects"
                      : "/design-projects"
                  )
                }
                // onclick={() => navigate("/dev-projects")}
                label="View projects"
                isFullWidth={true}
              />
            </div>
          </Card>
        </Wrapper>
      </CardContainer>
    </StyledSection>
  );
}

// featuredProjectType === "dev"
