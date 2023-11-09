import React from 'react'
import styled from 'styled-components'
import { Section } from '../shared/Section'

const HeroTitle = styled.h1`
    margin: 0px 0px 48px 0px;
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 40px;
    text-align: center;
    // color: rgba(88, 97, 101, 0.8);
    color: #323C40;

    @media (min-width: 768px) {
        font-weight: 700;
        font-size: 48px;
        line-height: 56px;
    }

    @media (min-width: 1024px) {
        margin-bottom: 48px;
    }
`

const HeroSubtitle = styled.h2`
    margin: 0px 0px 4px 0px;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    // color: #586165;
    color: #737C80;

    @media (min-width: 768px) {
        font-size: 28px;
        line-height: 32px;
    }

    @media (min-width: 1024px) {

    }
`

const HeroBody =  styled.h3`
    margin: 0px;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #505F66;

    & > span {
        color: #E0875A;
        font-weight: 500;
        // border-bottom: 1px solid #FFBD99;
    }

    & > span:nth-child(2) {
        color: #5A98E0;
        // border-bottom: 1px solid #CDCEFA;
    }

    @media (min-width: 1024px) {
        margin-top: 4px;
    }
`

const HeroBody2 = styled.p`
    margin: 56px 0px 0px 0px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    text-transform: uppercase;
    color: #586165;
    color: #323C40;

    @media (min-width: 1024px) {
        margin-top: 120px;
        font-size: 16px;
    }
`

export default function HeroSection() {
  return (
    <Section>
        <HeroTitle>Howdy! 👋</HeroTitle>
        <HeroSubtitle>Folks call me Stedman.</HeroSubtitle>
        <HeroBody>I find user centered solutions for digital experiences as a <span>UX Designer</span>. And make it real as a <span>Fullstack Developer</span>.</HeroBody>
        <HeroBody2>Check out my projects below!</HeroBody2>
    </Section>
  )
}
