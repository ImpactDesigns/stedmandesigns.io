import React from 'react'
import styled from 'styled-components'
import developImg from '../../images/project-vaxx-develop-img-sm-1.5x.png'

const StyledSection = styled.section`
    padding: 40px 20px 40px 20px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;    
    // border: 2px dashed orange;

    @media (min-width: 1024px) {
        padding-top: 80px;
        padding-bottom: 80px;
    }
`

const SectionTitleWrapper = styled.div`
    margin-bottom: 72px;
    grid-column: 1 / 13;

    @media (min-width: 768px) {
        grid-column: 3 / 11;
    }

    @media (min-width: 1024px) {
        grid-column: 4 / 10;
    }
`

const SectionTitle = styled.h2`
    margin: 0px;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    text-align: center;
    color: #232323;

    @media (min-width: 1024px) {
        font-size: 40px;
        line-height: 44px;
    }
`

const SectionSubtitle = styled.h3`
    margin: 12px 0px 0px 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    color: #434343;

    @media (min-width: 1024px) {
        font-size: 20px;
        line-height: 24px;
    }
`

const ContentWrapper = styled.div`
    margin-bottom: 72px;
    grid-column: 1 / 13;

    &:last-child {
        margin-bottom: 0px;
    }

    @media (min-width: 768px) {
        grid-column: 3 / 11;
    }

    @media (min-width: 1024px) {
        grid-column: 4 / 10;
    }
`

const ContentHeadingText = styled.h4`
    margin: 0px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    text-transform: uppercase;
    color: #434343;

    @media (min-width: 1024px) {
        font-size: 18px;
        line-height: 20px;
    }
`

const ContentBodyText = styled.p`
    margin: 8px 0px 0px 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center; 
    color: #434343;

    @media (min-width: 1024px) {
        font-size: 16px;
        line-height: 18px;
    }
`

const ImageWrapper = styled.div`
    margin-top: 20px;

    @media (min-width: 1024px) {
        display: flex;
        justify-content: center;
    }
`

const ContentImage = styled.img`
    width: 100%;

    @media (min-width: 1024px) {
        width: 60%;
    }
`

export default function DevelopSection() {
  return (
    <StyledSection>
        <SectionTitleWrapper>
            <SectionTitle>{'Develop & Deliver'}</SectionTitle>
            <SectionSubtitle>Searching for understanding of who our users were, and what painpoints or motivations that we could uncover, I was able to conduct 5 user interviews in our short timeline.</SectionSubtitle>
        </SectionTitleWrapper>

        <ContentWrapper>
            <ContentHeadingText>{'User flow'}</ContentHeadingText>
            <ContentBodyText>{'Searching for understanding of who our users were, and what painpoints or motivations that we could uncover, I was able to conduct 5 user interviews in our short timeline.'}</ContentBodyText>
            <ImageWrapper>
                <ContentImage src={developImg} alt={'alt text'} />
            </ImageWrapper>
        </ContentWrapper>

        <ContentWrapper>
            <ContentHeadingText>{'Results'}</ContentHeadingText>
            <ContentBodyText>{'Searching for understanding of who our users were, and what painpoints or motivations that we could uncover, I was able to conduct 5 user interviews in our short timeline.'}</ContentBodyText>
        </ContentWrapper>
    </StyledSection>
  )
}
