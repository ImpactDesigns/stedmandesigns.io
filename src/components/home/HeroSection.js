import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
    padding: 0px 20px 20px 20px;
    //   min-height: calc(100vh - 80px);
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    border: 2px solid orange;
`

const HeroTitle = styled.h1`
    margin: 0px;
    grid-column: 1 / 13;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 40px;
    text-align: center;
    color: rgba(88, 97, 101, 0.8);
    border: 1px dashed green;

    @media (min-width: 768px) {
        font-weight: 700;
        font-size: 48px;
        line-height: 56px;
    }
`

const HeroSubtitle = styled.h2`
    margin: 0px;
    grid-column: 1 / 13;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: #586165;
    border: 1px dashed green;

    @media (min-width: 768px) {
        font-size: 32px;
        line-height: 40px;
    }
`

const HeroBody =  styled.h3`
    margin: 0px;
    grid-column: 1 / 13;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #586165;
    // border: 1px dashed green;

    & > span {
        border-bottom: 1px solid #FFBD99;
    }

    & > span:nth-child(2) {
        border-bottom: 1px solid #CDCEFA;
    }
`

export default function HeroSection() {
  return (
    <StyledSection>
        <HeroTitle>Howdy! 👋</HeroTitle>
        <HeroSubtitle>Folks call me Stedman.</HeroSubtitle>
        <HeroBody>I find user centered solutions for digital experiences as a <span>UX Designer</span>. I make it real as a <span>Fullstack Developer</span>.</HeroBody>
    </StyledSection>
  )
}
