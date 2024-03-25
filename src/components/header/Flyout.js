import React from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import useAppStore from "../../stores/store"
import Typography from "@mui/material/Typography"
import { Button } from "../../components"
import closeIcon from "../../images/icons/close-icon.svg"

const FlyoutContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  padding: 0px 40px 0px 40px;
  height: 100vh;
  display: flex;
  align-items: center;
  visibility: ${(props) => props.visibility};
  background: #fbfcfb;
  z-index: 5;
`

const LinksList = styled.ul`
  width: 100%;
  padding-left: 0px;

  & > li {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 24px;
    color: #586165;
    list-style: none;
  }

  & > li > a {
    padding: 8px 0px 8px 0px;
    display: block;
    color: #586165;
    text-decoration: none;
    text-align: center;
  }

  // & > li > a:hover {
  //   color: #93de4e;
  // }
`

const CloseImage = styled.img`
  position: absolute;
  top: 40px;
  right: 24px;
  width: 32px;
  cursor: pointer;
`

export default function Flyout() {
  const isFlyoutOpen = useAppStore((state) => state.isFlyoutOpen)
  const setIsFlyoutOpen = useAppStore((state) => state.setIsFlyoutOpen)
  const { visibility } = setFlyoutVisibiity(isFlyoutOpen)

  function setFlyoutVisibiity(status) {
    if (status) {
      return {
        visibility: "visible",
      }
    } else if (!status) {
      return {
        visibility: "hidden",
      }
    }
  }

  const handleLinkClick = (path) => {
    navigate(path)
    setIsFlyoutOpen()
  }

  return (
    <FlyoutContainer visibility={visibility}>
      <CloseImage
        src={closeIcon}
        alt={"Click to close menu."}
        onClick={() => setIsFlyoutOpen()}
      />
      <LinksList>
        <li>
          <Button
            variant="text"
            component="a"
            onClick={() => handleLinkClick("/")}
            sx={{
              textTransform: "capitalize",
            }}
          >
            <Typography
              variant="h5"
              component="p"
              fontFamily="poppins"
              color="#586165"
            >
              Stedman Designs
            </Typography>
          </Button>
        </li>
        <li>
          <Button
            variant="text"
            component="a"
            onClick={() => handleLinkClick("/contact-me")}
          >
            <Typography
              variant="h5"
              component="p"
              fontFamily="poppins"
              color="#586165"
              sx={{
                textTransform: "capitalize",
              }}
            >
              Contact me
            </Typography>
          </Button>
        </li>
      </LinksList>
    </FlyoutContainer>
  )
}
