import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
  padding: 0px 20px 0px 20px;
  height: calc(100vh - 80px);
  border: 2px solid orange;
`

export default function MainSection() {
  return (
    <StyledSection>Contact page</StyledSection>
  )
}
