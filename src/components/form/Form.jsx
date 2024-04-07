import React from "react"
import PropTypes from "prop-types"
import { Grid } from "@mui/material"

export default function Form({ children }) {
  return (
    <Grid component="form" container>
      {children}
    </Grid>
  )
}

Form.propTypes = {
  children: PropTypes.node,
}
