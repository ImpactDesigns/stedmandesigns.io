import React from "react";
import styled from "styled-components";
import { Section } from "../../..";

const StyledSection = styled(Section)`
  padding-top: 56px;
  padding-bottom: 56px;
  position: relative;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
`;

const HeroTitle = styled.h1`
  margin: 0px 0px 0px 0px;
  grid-column: 1 / 13;
  font-style: normal;
  font-weight: 700;
  font-size: 52px;
  line-height: 56px;
  color: #586165;

  @media (min-width: 576px) {
    grid-column: 1 / 9;
  }

  @media (min-width: 768px) {
    font-size: 72px;
    line-height: 80px;
  }

  @media (min-width: 1024px) {
    grid-column: 1 / 13;
  }
`;

const HeroSubtitle = styled.h2`
  margin: 16px 0px 0px 0px;
  grid-column: 1 / 13;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #737c80;

  @media (min-width: 576px) {
    grid-column: 1 / 9;
  }

  @media (min-width: 1024px) {
    grid-column: 1 / 13;
  }
`;

export default function HeroSection() {
  return (
    <StyledSection>
      <HeroTitle>My portfolio</HeroTitle>
      <HeroSubtitle>of fullstack development & UX Design projects</HeroSubtitle>
    </StyledSection>
  );
}
