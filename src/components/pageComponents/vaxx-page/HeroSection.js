import React from 'react'
import styled from 'styled-components'
import { Section } from '../../../components'
import heroImage from '../../../images/project-vaxx-screen-360px-1.5x.jpg'

const StyledSection = styled(Section)`
    padding: 40px 20px 40px 20px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;

    @media (min-width: 1024px) {
        padding-top: 80px;
    }
`

const TextWrapper = styled.div`
    margin-bottom: 60px;
    grid-column: 1 / 13;

    @media (min-width: 768px) {
        grid-column: 3 / 11;
    }

    @media (min-width: 1024px) {
        grid-column: 2 / 8;
    }
`

const HeroTitle = styled.h1`
    margin: 0px 0px 20px 0px;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 44px;
    text-align: center;
    color: #242424;

    @media (min-width: 1024px) {
        font-size: 56px;
        line-height: 60px;
        text-align: left;
    }
`

const HeroSubtitle = styled.h3`
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    color: #434343;

    @media (min-width: 1024px) {
        font-size: 24px;
        line-height: 28px;
        text-align: left;
    }
`

const ImageWrapper = styled.div`
    grid-column: 1 / 13;
    display: flex;
    justify-content: center;

    @media (min-width: 768px) {
        grid-column: 3 / 11;
    }

    @media (min-width: 1024px) {
        grid-column: 9 /  12;
    }
`

const HeroImage = styled.img`
    width: 40%;

    @media (min-width: 768px) {
        width: 50%;
    }

    @media (min-width: 1024px) {
        width: 60%;
    }
`

export default function HeroSection() {
  return (
    <StyledSection>
        <TextWrapper>
            <HeroTitle>Vaxx Overflow</HeroTitle>
            <HeroSubtitle>Reduces Covid-19 vaccine waste by matching eligible vaccination seekers with providers that have remaining unexpired doses.</HeroSubtitle>
        </TextWrapper>
        <ImageWrapper>
            <HeroImage src={heroImage} alt={'Hero image'} />
        </ImageWrapper>
    </StyledSection>
  )
}
