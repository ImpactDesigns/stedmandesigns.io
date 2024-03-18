import React from "react"
import { Link } from "gatsby"
import { Typography } from "@mui/material"
import styled from "styled-components"
// import useAppStore from "../../stores/store"
// import Flyout from "./Flyout"
// import menuIcon from "../../images/icons/menu-icon.svg"

const StyledHeader = styled.header`
  position: relative;
  padding: 40px 0px 16px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > a > h5:hover {
    color: #93de4e;
  }
`

// const NameText = styled.h5`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: #586165;
//   font-family="poppins"
// `

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
      <Link to={"/"}>
        <Typography
          variant="h6"
          fontWeight="bold"
          component="p"
          color="#586165"
          fontFamily="poppins"
        >
          Stedman Designs
        </Typography>
        {/* <NameText>Stedman Designs</NameText> */}
      </Link>
      {/* <MenuIcon
        src={menuIcon}
        alt={"Click to open menu"}
        onClick={setIsFlyoutOpen}
      />
      <Flyout /> */}
    </StyledHeader>
  )
}
