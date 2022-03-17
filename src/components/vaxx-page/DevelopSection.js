import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
    padding: 40px 20px 40px 20px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;    
    border: 2px dashed orange;

    // @media (min-width: 1024px) {
    //     padding-top: 80px;
    //     padding-bottom: 80px;
    // }
`

const SectionTitleWrapper = styled.div`
    margin-bottom: 72px;
    grid-column: 1 / 13;
    border: 2px solid dodgerblue;


    // @media (min-width: 768px) {
    //     grid-column: 3 / 11;
    // }

    // @media (min-width: 1024px) {
    //     grid-column: 4 / 10;
    // }
`

const SectionTitle = styled.h2`
    margin: 0px;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    text-align: center;
    color: #232323;
    border: 1px dashed green;

    // @media (min-width: 1024px) {
    //     font-size: 40px;
    //     line-height: 44px;
    // }
`

export default function DevelopSection() {
  return (
    <StyledSection>
        <SectionTitleWrapper>
            <SectionTitle>{'Develop & Deliver'}</SectionTitle>
        </SectionTitleWrapper>
    </StyledSection>
  )
}
