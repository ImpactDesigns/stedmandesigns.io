import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  border: 2px solid hotpink;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;

  @media (min-width: 768px) {
      padding: 0px 80px 0px 80px;
  }

  @media (min-width: 1024px) {
      padding-top: 80px;
      padding-bottom: 80px;
      padding-left: 144px;
      padding-right: 144px;
  }
`

export default function Section({ children }) {
  return (
    <StyledSection>{children}</StyledSection>
  )
}
