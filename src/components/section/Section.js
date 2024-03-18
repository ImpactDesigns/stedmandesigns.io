import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;
  s @media (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (min-width: 1024px) {
    padding-left: 200px;
    padding-right: 200px;
  }
`

export default function Section({ children, className }) {
  return <StyledSection className={className}>{children}</StyledSection>
}
