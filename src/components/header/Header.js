import React from "react"
import { navigate } from "gatsby"
import styled from "styled-components"
import useAppStore from "../../stores/store"
import Typography from "@mui/material/Typography"
import { Button } from "../../components"
import Flyout from "./Flyout"
import menuIcon from "../../images/icons/menu-icon.svg"

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

const MenuIcon = styled.img`
  width: 32px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`

export default function Header() {
  const setIsFlyoutOpen = useAppStore((state) => state.setIsFlyoutOpen)

  return (
    <StyledHeader>
      <Button
        variant="text"
        component="a"
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
      <Button
        variant="text"
        component="a"
        onClick={() => navigate("/contact-me")}
        sx={{
          visibility: "hidden",
          fontFamily: "poppins",
          color: "#586165",
          borderColor: "rgba(88, 97, 101, 0.4)",
          "&:hover": {
            color: "#1565c0",
          },
          "@media (min-width: 768px)": {
            visibility: "visible",
          },
        }}
      >
        Contact me
      </Button>
      <MenuIcon
        src={menuIcon}
        alt={"Click to open menu"}
        fontFamily="poppins"
        onClick={setIsFlyoutOpen}
      />
      <Flyout />
    </StyledHeader>
  )
}
