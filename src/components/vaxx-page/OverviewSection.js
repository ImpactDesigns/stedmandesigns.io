import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
    padding: 40px 20px 40px 20px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    border: 2px solid orange;

    // @media (min-width: 1024px) {
    //     padding-top: 80px;
    // }
`

export default function OverviewSection() {
  return (
    <StyledSection>
        OverviewSection
    </StyledSection>
  )
}
