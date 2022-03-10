import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  padding: 0px 20px 0px 20px;
  min-height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 2px solid orange;
`

const TitleText = styled.h1`
  margin: 0px;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  color: #586165;
  // border: 1px dashed green;

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 40px;  
  }
`

const SubTitleText = styled.h2`
  margin: 8px 0px 32px 0px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  text-transform: uppercase;
  text-align: center;
  color: #586165;
  // border: 1px dashed green;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 28px;  
  }
`

const BodyText = styled.p`
  margin: 0px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #586165;
  // border: 1px dashed green;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 28px;  
  }
`

export default function HomeContent() {
  return (
    <StyledSection>
        <div>
          <TitleText>Stedman Designs</TitleText>
          <SubTitleText>UX Designer & Fullstack Developer</SubTitleText>
          <BodyText>Content is on it's way 😊</BodyText>
        </div>
    </StyledSection>
  )
}
