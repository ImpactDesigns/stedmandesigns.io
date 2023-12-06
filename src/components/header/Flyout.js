import React, { useContext } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { UserContext } from '../../contexts/AppContext'
import closeIcon from '../../images/icons/close-icon.svg'

const FlyoutContainer = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    padding: 0px 40px 0px 40px;
    // min-height: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    visibility: ${props => props.visibility};
    background: #fbfcfb;
    z-index: 5;
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

  & > li > a:hover {
    color: #93DE4E;
  }
`

const CloseImage = styled.img`
    position: absolute;
    top: 40px;
    right: 24px;
    width: 32px;
    cursor: pointer;
    //   border: 1px dashed green;
`

export default function Flyout() {
    const [isFlyoutOpen, setIsFlyoutOpen] = useContext(UserContext)
    const { visibility } = setFlyoutVisibiity(isFlyoutOpen)

    function closeFlyout(status, setter) {
        if (status) {
            setter(() => false)
        }
    }

    function setFlyoutVisibiity(status) {
        if (status) {
            return {
                visibility: 'visible'
            }
        } else if (!status) {
            return {
                visibility: 'hidden'
            }
        }
    }

    return (
        <FlyoutContainer visibility={visibility}>
            <CloseImage 
                src={closeIcon} 
                alt={'Click to close menu.'} 
                onClick={() => closeFlyout(isFlyoutOpen, setIsFlyoutOpen)} 
            />
            <LinksList>
                <li><Link to={'/'} activeClassName={'mobile-active-link'}>Stedman Designs</Link></li>
                {/* <li><Link to={'/my-work'} activeClassName={'mobile-active-link'}>Work</Link></li> */}
                {/* <li><Link to={'/about-me'} activeClassName={'mobile-active-link'}>About</Link></li> */}
                {/* <li><Link to={'/contact-me'} activeClassName={'mobile-active-link'}>Contact</Link></li> */}
            </LinksList>
        </FlyoutContainer>
    )
}
