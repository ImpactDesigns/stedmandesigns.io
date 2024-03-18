import React from "react"
import styled from "styled-components"
// import useAppStore from "../stores/store"
import { Container, Box } from "@mui/material"
import { Header, Banner } from "../components"
// import closeIcon from "../images/icons/close-icon-v2.svg"

// const BannerText = styled("p")`
//   margin: 0px;
//   color: #fbfcfb;

//   & > span {
//     font-weight: 500;
//   }
// `

const CloseImage = styled.img`
  position: relative;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  cursor: pointer;
  border-radius: 2px;

  &:hover {
    border: 1px solid #fbfcfb;
  }
`

export default function Layout({ children }) {
  // const isBannerVisible = useAppStore((state) => state.isBannerVisible)
  // const setIsBannerVisible = useAppStore((state) => state.setIsBannerVisible)

  return (
    <Container fixed>
      <title>Stedman Designs</title>
      <Header />
      {/* {isBannerVisible && (
        <Banner>
          <BannerText>
            <span>Heads up!</span> Throughout the month of March, I will be
            updating my portfolio and adding new projects as I get them hosted.
          </BannerText>
          <CloseImage
            src={closeIcon}
            alt={"Click to close banner."}
            onClick={() => setIsBannerVisible((prevState) => !prevState)}
          />
        </Banner>
      )} */}
      <Box component="main">{children}</Box>
    </Container>
  )
}
