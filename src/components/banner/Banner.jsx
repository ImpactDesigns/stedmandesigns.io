import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const BannerContainer = styled('div')`
  background: black;
`

export default function Banner({ children, className }) {
  return (
    <BannerContainer className={className}>{children}</BannerContainer>
  )
}

Banner.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}