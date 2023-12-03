import React from "react";
import Button from "./Button";

export const Primary = {
  render: args => <Button {...args} />,
  args: {
    children: 'Click me'
  }
}

const meta = {
  title: "Components/Shared/Button",
  component: Button
};

export default meta