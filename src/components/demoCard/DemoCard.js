import React from 'react'
import styled from 'styled-components'
import mobileDesktopSceneImg from '../../images/desktop-sm-x2.png'

const CardContainer = styled.div`
    grid-column: 1 / 13;
    // padding: 0px 20px 0px 20px;
    // background: rgba(255, 189, 153, 0.6);
    // background: lightgreen;
    // border-radius: 4px;
    // border: 1px solid orange;
`

const ImageContainer = styled.div`
    padding: 72px 20px 72px 20px;
    background: rgba(255, 189, 153, 0.6);
    border-radius: 4px;

    // border: 1px dashed purple;

    & > img {
        margin: 0px;
        width: 100%;
        // border: 1px dashed green;
    }
`

const MobileDescContainer = styled.div`
    margin-top: 16px;
    display: block;
    // border: 1px dashed purple;
`

const DescTitle = styled.h4`
    margin: 0px 0px 8px 0px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #586165;
    // border: 1px dashed green;
`

const DescBody = styled.p`
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    color: #586165;
    // border: 1px dashed green;
`

export default function DemoCard() {
  return (
    <CardContainer>
        <ImageContainer>
            <img src={mobileDesktopSceneImg} alt={'Preview of Rocket Auction platform on a screen.'} />
        </ImageContainer>

        <MobileDescContainer>
            <DescTitle>Project Title</DescTitle>
            <DescBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper consectetur sit erat ornare augue. Egestas sed cursus nisl quis.</DescBody>
        </MobileDescContainer>
    </CardContainer>
  )
}
