import React from 'react'
import styled from 'styled-components'
import problemStatementsImg from '../../images/project-vaxx-define-img-sm-1.5x.png'
import competitiveImg from '../../images/project-vaxx-comp-img-sm-1.5x.png'

const StyledSection = styled.section`
    padding: 40px 20px 40px 20px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    border: 2px solid orange;

    // @media (min-width: 1024px) {
    //     padding-top: 80px;
    //     padding-bottom: 80px;
    // }
`

const SectionTitleWrapper = styled.div`
    margin-bottom: 72px;
    grid-column: 1 / 13;
    border: 2px solid dodgerblue;
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
`

const SectionSubtitle = styled.h3`
    margin: 12px 0px 0px 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    text-align: center;
    color: #434343;
    border: 1px dashed green;
`

const ContentWrapper = styled.div`
    grid-column: 1 / 13;
    border: 2px solid dodgerblue;
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
    border: 1px dashed green;
`

const ContentBodyText = styled.p`
    margin: 8px 0px 0px 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center; 
    color: #434343;
    border: 1px dashed green;
`

const ImageWrapper = styled.div`
    margin-top: 20px;
    border: 1px solid red;
`

const ContentImage = styled.img`
    width: 100%;
    border: 1px dashed green;
`

export default function DiscoverSection() {
  return (
    <StyledSection>
        <SectionTitleWrapper>
            <SectionTitle>Discover & Define</SectionTitle>
            <SectionSubtitle>Searching for understanding of who our users were, and what painpoints or motivations that we could uncover, I was able to conduct 5 user interviews in our short timeline.</SectionSubtitle>
        </SectionTitleWrapper>

        <ContentWrapper>
            <ContentHeadingText>{'Persona and Problem Statement'}</ContentHeadingText>
            <ContentBodyText>{'Searching for understanding of who our users were, and what painpoints or motivations that we could uncover, I was able to conduct 5 user interviews in our short timeline.'}</ContentBodyText>
            <ImageWrapper>
                <ContentImage src={problemStatementsImg} alt={'content image'} />
            </ImageWrapper>
        </ContentWrapper>

        <ContentWrapper>
            <ContentHeadingText>{'Competitive Analysis'}</ContentHeadingText>
            <ContentBodyText>
                Searching for understanding of who our users were, and what painpoints or motivations that we could uncover, I was able to conduct 5 user interviews in our short timeline.
                <br />
                <br />
                Searching for understanding of who our users were, and what painpoints or motivations that we could uncover, I was able to conduct 5 user interviews in our short timeline.
            </ContentBodyText>
            <ImageWrapper>
                <ContentImage src={competitiveImg} alt={'content image'} />
            </ImageWrapper>
        </ContentWrapper>
    </StyledSection>
  )
}
