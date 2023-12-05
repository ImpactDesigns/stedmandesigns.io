import React from "react";
import Button from "./Button";

/**
 * Button used for a primary call to action.
 */
export const Default = {
  render: (args) => <Button {...args} />,
  args: {
    label: "Button",
    id: "testing-id",
    buttonStyle: "primary",
    classname: 'default-button',
    isFullWidth: false,
    disabled: false,
    onclick: () => alert('Clicked')
  },
  decorators: [
    (ButtonStory) => (
      <div style={{ width: "240px" }}>
        <ButtonStory />
      </div>
    ),
  ],
};

export const FullWidth = {
  render: (args) => <Button {...args} />,
  args: {
    label: "Button",
    id: "testing-id",
    buttonStyle: "primary",
    classname: 'full-width-button',
    isFullWidth: true,
    disabled: false,
    onclick: () => alert('Clicked')
  },
  decorators: [
    (ButtonStory) => (
      <div style={{ width: "240px" }}>
        <ButtonStory />
      </div>
    ),
  ],
};

/**
 * Disabled the button interactivity.
 */
export const Disabled = {
  render: (args) => <Button {...args} />,
  args: {
    label: "Button",
    id: "testing-id",
    buttonStyle: "primary",
    classname: 'disabled-button',
    isFullWidth: false,
    disabled: true,
    onclick: () => alert('Clicked')
  },
  decorators: [
    (ButtonStory) => (
      <div style={{ width: "240px" }}>
        <ButtonStory />
      </div>
    ),
  ],
};

const meta = {
  title: "Components/Shared/Button",
  component: Button,
  tags: ["autodocs"]
};

export default meta;
