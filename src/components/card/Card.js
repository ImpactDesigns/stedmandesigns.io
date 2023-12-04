import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const CardContainer = styled('div')`
  padding: 24px;
  background: none;
  border: 2px solid rgba(88, 97, 101, .4);
  border-radius: 8px;
`

export default function Card({ children }) {
  return (
    <CardContainer>{children}</CardContainer>
  )
}

Card.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.element
  ]).isRequired
}