import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const BannerContainer = styled("div")`
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  background: #586165;

  @media (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (min-width: 1024px) {
    padding-left: 200px;
    padding-right: 200px;
  }
`

export default function Banner({ message, children, className }) {
  return (
    <BannerContainer className={className}>
      {!children ? (
        <p style={{ margin: "0px", color: "white" }}>{message}</p>
      ) : (
        children
      )}
    </BannerContainer>
  )
}

Banner.propTypes = {
  message: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
}
