import React from "react"
import Button from "./Button"

const ButtonTemplate = {
  render: (args) => <Button {...args} />,
}

/**
 * Copy for Button documentation.
 */
export const Default = {
  ...ButtonTemplate,
  args: {
    children: "Button",
    variant: "contained",
    onClick: () => alert("Button has been clicked."),
  },
}

/**
 * Copy for Button documentation.
 */
export const Variant = {
  ...ButtonTemplate,
  args: {
    children: "Click me",
    variant: "outlined",
  },
}

const meta = {
  title: "Shared/Button",
  component: Button,
  tags: ["autodocs"],
}

export default meta
