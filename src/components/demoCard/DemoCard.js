import React, { useState } from 'react'
import styled from 'styled-components'
import mobileDesktopSceneImg from '../../images/desktop-sm-x2.png'

const CardContainer = styled.div`
    position: relative;
    margin-bottom: 48px;
    grid-column: 2 / 12;
    // border: 1px solid orange;

    // @media (min-width: 768px) {
    //     grid-column: 2 / 12;
    // }

    @media (min-width: 1024px) {
        grid-column: span 6;
        margin-bottom: 0px;
    }
`

const ImageContainer = styled.div`
    position: relative;
    padding: 72px 20px 72px 20px;
    background: ${props => props.backgroundColor};
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

    @media (min-width: 1024px) {
        display: none;
    }
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

const HiddenLayer = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    padding: 0px 16px 0px 16px;
    // display: flex;
    display: ${props => props.display};
    flex-direction: column;
    align: items: center;
    justify-content: center;
    border-radius: 4px;
    background: rgba(88, 97, 101, 0.98);
`

const HiddenTitle = styled(DescTitle)`
    color: #FBFCFB;
    // border: 1px dashed green;
`

const HiddenBody = styled(DescBody)`
    color: #FBFCFB;
    // border: 1px dashed green;
`

export default function DemoCard(props) {
    const [isCardHovered, setIsCardHovered] = useState(false)
    const { color } = props 
    const { display } = setHiddenLayer(isCardHovered)

    function handleMouseEnter(status, setter) {
        if (!status) {
            setter(() => true)
            // alert('mouse has entered the element')
        }
    }

    function handleMouseOut(status, setter) {
        if (status) {
            setter(() => false)
            // alert('mouse has left the element')
        }
    }

    function setHiddenLayer(status) {
        if (!status) {
            return {
                display: 'none'
            }
        } else if (status) {
            return {
                display: 'flex'
            }
        }
    }

    console.log(555, display)

    return (
        <CardContainer onMouseOver={() => handleMouseEnter(isCardHovered, setIsCardHovered)} onMouseLeave={() => handleMouseOut(isCardHovered, setIsCardHovered)} >
            {/* <HiddenLayer display={display}>
                <HiddenTitle>Project Title</HiddenTitle>
                <HiddenBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper consectetur sit erat ornare augue. Egestas sed cursus nisl quis.</HiddenBody>
            </HiddenLayer> */}
            <ImageContainer backgroundColor={color}>
                <HiddenLayer display={display}>
                    <HiddenTitle>Project Title</HiddenTitle>
                    <HiddenBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper consectetur sit erat ornare augue. Egestas sed cursus nisl quis.</HiddenBody>
                </HiddenLayer>
                <img src={mobileDesktopSceneImg} alt={'Preview of Rocket Auction platform on a screen.'} />
            </ImageContainer>

            <MobileDescContainer>
                <DescTitle>Project Title</DescTitle>
                <DescBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper consectetur sit erat ornare augue. Egestas sed cursus nisl quis.</DescBody>
            </MobileDescContainer>
        </CardContainer>
    )
}
