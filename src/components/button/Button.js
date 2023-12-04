import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 18px;
  color: ${props => {
    switch (props.buttonStyle) {
      case "secondary":
        return "#586165";
      case "text":
      case "primary":
      default:
        return "white";
    }
  }};
  line-height: 20px;
  width: ${(props) => (props.isFullWidth ? "100%" : "auto")};
  background: ${(props) => {
    switch (props.buttonStyle) {
      case "secondary":
        return "none";
      case "text":
      case "primary":
      default:
        return "black";
    }
  }};
  border: ${(props) => {
    switch (props.buttonStyle) {
      case "secondary":
        return "2px solid #586165";
      case "text":
      case "primary":
      default:
        return "none";
    }
  }};
  border-radius: ${(props) => {
    switch (props.buttonStyle) {
      case "secondary":
        return "50px";
      case "text":
      case "primary":
      default:
        return "2px";
    }
  }};
`;

const Button = ({
  id,
  className,
  label = "Submit",
  buttonStyle = "primary",
  disabled = false,
  isFullWidth = false,
  type,
  onclick,
  ...otherProps
}) => {
  const buttonId = id ? `${buttonStyle}-button-${id}` : `${buttonStyle}-button`;

  return (
    <StyledButton
      id={buttonId}
      className={className}
      type={type ? type : "button"}
      disabled={disabled}
      isFullWidth={isFullWidth}
      buttonStyle={buttonStyle}
      onClick={onclick}
      {...otherProps}
    >
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  /**
   * Applies an id to the button element.
   */
  id: PropTypes.string,
  /**
   * Applies an class names to the button element.
   */
  className: PropTypes.string,
  /**
   * Applies the primary, secondary, or text button styling to help with IA.
   */
  buttonStyle: PropTypes.oneOf(["primary", "secondary", "text"]).isRequired,
  /**
   * Applies the correct button element attribute to the button element.
   */
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  /**
   * String that is applied as the label for the button.
   */
  label: PropTypes.string,
  /**
   * onClick function called when the button is clicked.
   */
  onclick: PropTypes.func,
  /**
   * Disables user interaction with the button, and applies the disabled styles.
   */
  disabled: PropTypes.bool,
  /**
   * Allows the button to expand the full width of the container, or just the size of the label.
   */
  isFullWidth: PropTypes.bool,
};

export default Button;
