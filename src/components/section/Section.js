import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types'

const StyledSection = styled.section`
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (min-width: 1024px) {
    padding-left: 200px;
    padding-right: 200px;
  }
`;

export default function Section({ children, className }) {
  return <StyledSection className={className}>{children}</StyledSection>;
}

Section.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string
}
