import React from "react"
import PropTypes from "prop-types"
import Button from '@mui/material/Button'

export default function NewButton({
  children,
  onClick,
  variant = "contained",
  label,
  ...otherProps
}) {
  return (
    <Button variant={variant} onClick={onClick} {...otherProps}>
      {label ? label : children}
    </Button>
  )
}

NewButton.propTypes = {
  /**
   * Some copy for the variant prop.
   */
  variant: PropTypes.oneOf(["contained", "outlined", "text", "string"]),
  /**
   * Some copy for the children prop.
   */
  children: PropTypes.node,
  /**
   * Some copy for the label prop.
   */
  label: PropTypes.string,
  /**
   * Some copy for the onClick prop.
   */
  onClick: PropTypes.func,
}
