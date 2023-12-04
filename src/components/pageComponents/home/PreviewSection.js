import React from "react";
import styled from "styled-components";
import { Section } from '../..'
import DemoCard from "../../demoCard/DemoCard";

const StyledSection = styled(Section)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;

  & > div:last-child {
    margin-bottom: 0px;
  }

  @media (min-width: 768px) {
    gap: 20px;
  }

  @media (min-width: 1024px) {
    gap: 40px;
  }
`;

const projectsList = [
  {
    title: "Vaxx Overflow",
    description:
      "Reduces Covid-19 vaccine waste by matching eligible vaccination seekers with providers that have remaining unexpired doses.",
    projectPath: "/design-projects/vaxx-overflow",
    color: "#E9EFF5",
  },
  {
    title: 'Mentor Hub',
    description: 'Placeholder copy',
    projectPath: '/design-projects/vaxx-overflow',
    color: '#F5EDE9'
  }
];

export default function PreviewSection() {
  return (
    <StyledSection>
      {projectsList.map((project, idx) => (
        <DemoCard project={project} key={idx} />
      ))}
    </StyledSection>
  );
}
