import React from "react"
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
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
