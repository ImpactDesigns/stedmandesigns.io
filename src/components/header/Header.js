import React from "react"
import { navigate } from "gatsby"
import Button from '@mui/material/Button'
import Typography from "@mui/material/Typography"
import styled from "styled-components"
// import useAppStore from "../../stores/store"
// import Flyout from "./Flyout"
// import menuIcon from "../../images/icons/menu-icon.svg"

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  padding: 40px 0px 16px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fbfcfb;
  z-index: 200;
  // border: 1px solid red;

  // & > a > h5:hover {
  //   color: #93de4e;
  // }
`

// const MenuIcon = styled.img`
//   width: 32px;
//   cursor: pointer;

//   @media (min-width: 768px) {
//     display: none;
//   }
// `

export default function Header() {
  // const setIsFlyoutOpen = useAppStore((state) => state.setIsFlyoutOpen)

  return (
    <StyledHeader>
      <Button
        sx={{ paddingLeft: "0px", paddingRight: "0px" }}
        onClick={() => navigate("/")}
      >
        <Typography
          variant="h6"
          fontWeight="bold"
          component="p"
          color="#586165"
          fontFamily="poppins"
          textTransform="capitalize"
        >
          Stedman Designs
        </Typography>
      </Button>
      {/* <MenuIcon
        src={menuIcon}
        alt={"Click to open menu"}
        onClick={setIsFlyoutOpen}
      />
      <Flyout /> */}
    </StyledHeader>
  )
}
