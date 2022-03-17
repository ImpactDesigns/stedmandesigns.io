import React from 'react'
import styled from 'styled-components'
import heroImage from '../../images/project-vaxx-screen-360px-1.5x.jpg'

const StyledSection = styled.section`
    padding: 40px 20px 40px 20px;
    // height: calc(100vh - 80px);
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    border: 2px solid orange;
`

const HeroTitle = styled.h1`
    margin: 0px 0px 20px 0px;
    grid-column: 1 / 13;
    height: 44px;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 44px;
    text-align: center;
    color: #242424;
    border: 1px dashed green;
`

const HeroSubtitle = styled.h3`
    margin: 0px;
    grid-column: 1 / 13;
    height: 80px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    color: #434343;
    border: 1px dashed green;
`

const ImageWrapper = styled.div`
    margin-top: 60px;
    grid-column: 4 / 10;
    // border: 1px solid dodgerblue;
`

const HeroImage = styled.img`
    width: 100%;
    // border: 1px dashed green;
`

export default function HeroSection() {
  return (
    <StyledSection>
        <HeroTitle>Vaxx Overflow</HeroTitle>
        <HeroSubtitle>Reduces Covid-19 vaccine waste by matching eligible vaccination seekers with providers that have remaining unexpired doses.</HeroSubtitle>
        <ImageWrapper>
            <HeroImage src={heroImage} alt={'Hero image'} />
        </ImageWrapper>
    </StyledSection>
  )
}
