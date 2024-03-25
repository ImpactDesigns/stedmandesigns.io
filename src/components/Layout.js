import React from "react"
import { Container, Box } from "@mui/material"
import { Header } from "../components"

export default function Layout({ children }) {
  return (
    <Container fixed>
      <title>Stedman Designs</title>
      <Header />
      <Box component="main">{children}</Box>
    </Container>
  )
}
