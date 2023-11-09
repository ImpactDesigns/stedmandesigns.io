import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (min-width: 1024px) {
    padding-left: 80px;
    padding-right: 80px;
  }
`;

export default function Section({ children, className }) {
  return <StyledSection className={className}>{children}</StyledSection>;
}
