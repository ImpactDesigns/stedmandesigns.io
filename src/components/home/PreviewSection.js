import React from 'react'
import styled from 'styled-components'
import DemoCard from '../demoCard/DemoCard'

const StyledSection = styled.section`
    padding: 20px 20px 20px 20px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    gap: 40px;
    border: 2px solid dodgerblue;

    & > h1 {
        margin: 0px;

        border: 1px dashed green;
    }

    @media (min-width: 768px) {
        padding: 20px 80px 20px 80px;
    }

    @media (min-width: 1024px) {
        padding-top: 80px;
        padding-left: 144px;
        padding-right: 144px;
    }
`

export default function PreviewSection() {
  return (
    <StyledSection>
       <DemoCard color={'rgba(255, 189, 153, 0.6)'} />
       <DemoCard color={'rgba(205, 206, 250, 0.6)'} />
    </StyledSection>
  )
}
