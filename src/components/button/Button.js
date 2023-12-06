import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled("button")({
  padding: "6px 16px",
  width: (props) => (!props.isFullWidth ? "auto" : "100%"),
  boxSizing: "border-box",
  fontFamily: "Poppins",
  fontSize: "18px",
  lineHeight: "20px",
  fontWeight: "600",
  color: "#586165",
  background: "none",
  border: "2px solid #586165",
  borderRadius: "50px",
  cursor: "pointer",
  "&:hover": {
    color: "#FFFFFF",
    background: "#586165",
  },
  "&:active": {
    background: "#141719",
    border: "2px solid #141719",
  },
  "&:disabled": {
    color: "#586165",
    background: "#D9D9D9",
  },
});

const Button = ({
  id,
  className,
  label = "Submit",
  buttonStyle = "primary",
  disabled = false,
  isFullWidth = false,
  type = "button",
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
  buttonStyle: PropTypes.oneOf(["primary", "secondary"]).isRequired,
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
