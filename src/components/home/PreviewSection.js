import React from 'react'
import styled from 'styled-components'
import DemoCard from '../demoCard/DemoCard'

const StyledSection = styled.section`
    padding: 20px 20px 20px 20px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    // border: 2px solid dodgerblue;

    & > div:last-child {
        margin-bottom: 0px;
    }

    @media (min-width: 768px) {
        padding: 20px 80px 20px 80px;
    }

    @media (min-width: 1024px) {
        gap: 40px;
        padding-top: 40px;
        padding-left: 144px;
        padding-right: 144px;
    }
`

export default function PreviewSection() {
  return (
    <StyledSection>
       <DemoCard color={'#E9EFF5'} />
       <DemoCard color={'#F5EDE9'} />
       <DemoCard color={'#F5EDE9'} />
       <DemoCard color={'#E9EFF5'} />
    </StyledSection>
  )
}