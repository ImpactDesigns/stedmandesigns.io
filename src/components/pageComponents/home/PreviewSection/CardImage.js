import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ImageContainer = styled("div")`
  position: relative;
  box-sizing: border-box;
  margin: 0px 0px 16px 0px;
  width: 100%;
  height: 140px;
  overflow: hidden;
  border-radius: 8px;
  background: ${(props) => (props.image ? `url(${props.image})` : "rgba(88, 97, 101, 0.4)")};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

export default function CardImage({ className, image, ...otherProps }) {
  return <ImageContainer image={image} className={className} {...otherProps} />;
}

CardImage.propTypes = {
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
};
