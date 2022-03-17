import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import mobileDesktopSceneImg from '../../images/desktop-sm-x2.png'

const CardContainer = styled.div`
    position: relative;
    margin-bottom: 48px;
    grid-column: 2 / 12;

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

    & > img {
        margin: 0px;
        width: 100%;
        // border: 1px dashed green;
    }
`

const MobileDescContainer = styled.div`
    margin-top: 16px;
    display: block;

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
`

const DescBody = styled.p`
    margin: 0px;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    color: #586165;
`

const HiddenLayer = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    padding: 0px 16px 0px 16px;
    display: ${props => props.display};
    flex-direction: column;
    align: items: center;
    justify-content: center;
    border-radius: 4px;
    background: rgba(88, 97, 101, 0.98);
`

const HiddenTitle = styled(DescTitle)`
    color: #FBFCFB;
`

const HiddenBody = styled(DescBody)`
    color: #FBFCFB;
`

export default function DemoCard(props) {
    const [isCardHovered, setIsCardHovered] = useState(false)
    const { color, title, description, projectPath } = props.project
    const { display } = setHiddenLayer(isCardHovered)

    function handleMouseEnter(status, setter) {
        if (!status) {
            setter(() => true)
        }
    }

    function handleMouseOut(status, setter) {
        if (status) {
            setter(() => false)
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

    return (
        <CardContainer onMouseOver={() => handleMouseEnter(isCardHovered, setIsCardHovered)} onMouseLeave={() => handleMouseOut(isCardHovered, setIsCardHovered)} >
            <Link to={projectPath}>
            <ImageContainer backgroundColor={color}>
                <HiddenLayer display={display}>
                    <HiddenTitle>{title}</HiddenTitle>
                    <HiddenBody>{description}</HiddenBody>
                </HiddenLayer>
                <img src={mobileDesktopSceneImg} alt={'Preview of Rocket Auction platform on a screen.'} />
            </ImageContainer>
            </Link>

            <MobileDescContainer>
                <DescTitle>{title}</DescTitle>
                <DescBody>{description}</DescBody>
            </MobileDescContainer>
        </CardContainer>
    )
}
