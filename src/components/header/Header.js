import React from 'react'
import { Link } from "gatsby"
import styled from 'styled-components'
import menuIcon from '../../images/icons/menu-icon.svg'

const StyledHeader = styled.header`
  padding: 40px 20px 8px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // border: 1px solid lightcoral;
`

const NameText = styled.h5`
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 1px dashed green;
`

const MenuIcon = styled.img`
  width: 32px;
  // border: 1px dashed green;

  @media (min-width: 768px) {
    display: none;
  }
`

const LinksList = styled.ul`
  display: none;
  padding-left: 0px;
  // border: 2px solid orange;

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
    color: #586165;
    text-decoration: none;
  }

  & > li:nth-child(2) {
    margin-left: 20px;
    margin-right: 20px;
  }

  & > li > a:hover {
    color: #93DE4E;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`

export default function Header() {
  return (
    <StyledHeader>
      <NameText>Stedman Designs</NameText>
      <LinksList>
        <li><Link to={'/my-work'}>Work</Link></li>
        <li><Link to={'/about-me'}>About</Link></li>
        <li><Link to={'/contact-me'} activeClassName={'active-link'}>Contact</Link></li>
      </LinksList>
      <MenuIcon src={menuIcon} alt={'Click to open menu'} />
    </StyledHeader>
  )
}
