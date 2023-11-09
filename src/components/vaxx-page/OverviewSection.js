import React from "react";
import styled from "styled-components";
import { Section } from "../shared/Section";

const StyledSection = styled(Section)`
  padding: 40px 20px 40px 20px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;

  @media (min-width: 1024px) {
    padding-top: 80px;
    padding-bottom: 80px;
  }
`;

const TextWrapper = styled.div`
  grid-column: 1 / 13;

  @media (min-width: 768px) {
    grid-column: 3 / 11;
  }

  @media (min-width: 1024px) {
    grid-column: 4 / 10;
  }
`;

const SectionTitle = styled.h2`
  margin: 0px;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  text-align: center;
  color: #242424;

  @media (min-width: 1024px) {
    font-size: 40px;
    line-height: 44px;
  }
`;

const SectionSubtitle = styled.h3`
  margin: 12px 0px 0px 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #434343;

  @media (min-width: 1024px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

const SectionHeadingText = styled.h4`
  margin: 48px 0px 0px 0px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #434343;

  @media (min-width: 1024px) {
    font-size: 18px;
    line-height: 20px;
  }
`;

const SectionBodyText = styled.p`
  margin: 8px 0px 0px 0px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  color: #434343;

  @media (min-width: 1024px) {
    font-size: 16px;
    line-height: 18px;
  }
`;

export default function OverviewSection() {
  return (
    <StyledSection>
      <TextWrapper>
        <SectionTitle>Overview</SectionTitle>
        <SectionSubtitle>
          The app aims to reduce Covid-19 vaccine waste by matching eligible
          vaccination seekers with providers that have remaining opened doses.
        </SectionSubtitle>

        <SectionHeadingText>Role</SectionHeadingText>
        <SectionBodyText>UX/UI Designer</SectionBodyText>

        <SectionHeadingText>Process</SectionHeadingText>
        <SectionBodyText>
          Truncated timeline lead to blah blah. Short paragraph explaining
          Double Diamond. Short sentence or two about the discovery phase, and
          what I did.
          <br />
          <br />
          Truncated timeline lead to blah blah. Short paragraph explaining
          Double Diamond. Short sentence or two about the discovery phase, and
          what I did.
        </SectionBodyText>
      </TextWrapper>
    </StyledSection>
  );
}
