import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CardContainer = styled("div")`
  position: relative;
  box-sizing: border-box;
  padding: 24px;
  display: block;
  background: none;
  border: 2px solid rgba(88, 97, 101, 0.3);
  border-radius: 8px;
`;

export default function Card({ id, className, children, ...otherProps }) {
  const cardId = id ? `card-${id}` : null;

  return (
    <CardContainer id={cardId} className={className} {...otherProps}>
      {children}
    </CardContainer>
  );
}

Card.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  id: PropTypes.string,
};
