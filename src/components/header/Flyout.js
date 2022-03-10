import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import closeIcon from '../../images/icons/close-icon.svg'

const FlyoutContainer = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    padding: 0px 40px 0px 40px;
    height: 100vh;
    // opacity: 70%;
    display: flex;
    align-items: center;
    background: #fbfcfb;
    // border: 1px solid dodgerblue;
`

const LinksList = styled.ul`
    width: 100%;
    padding-left: 0px;
    //   border: 2px solid orange;

  & > li {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 24px;
    color: #586165;
    list-style: none;
    // border: 1px dashed green;
  }

  & > li > a {
    padding: 8px 0px 8px 0px;
    display: block;
    color: #586165;
    text-decoration: none;
    text-align: center;
    // border: 1px dashed green;
  }

  & > li:nth-child(2) {
    margin-top: 12px;
    margin-bottom: 12px;
  }

  & > li > a:hover {
    color: #93DE4E;
  }
`

const CloseImage = styled.img`
  position: absolute;
  top: 40px;
  right: 24px;
  width: 32px;
//   border: 1px dashed green;
`

export default function Flyout() {
  return (
    <FlyoutContainer>
        <CloseImage src={closeIcon} alt="Click to close menu." />
        <LinksList>
            <li><Link to={'/my-work'} activeClassName={'active-link'}>Work</Link></li>
            <li><Link to={'/about-me'} activeClassName={'active-link'}>About</Link></li>
            <li><Link to={'/contact-me'} activeClassName={'active-link'}>Contact</Link></li>
        </LinksList>
    </FlyoutContainer>
  )
}
