import React from "react";
import Button from "./Button";

/**
 * Button used for a primary call to action.
 */
export const Primary = {
  render: args => <Button {...args} />,
  args: {
    label: 'Button',
    id: 'testing-id',
    buttonStyle: 'primary'
  },
  decorators: [
    ButtonStory => (
      <div style={{ width: '240px', border: '1px solid orange' }}>
        <ButtonStory />
      </div>
    )
  ]
}

/**
 * Button used for a secondary call to action.
 */
export const Secondary = {
  render: args => <Button {...args} />,
  args: {
    label: 'Button',
    id: 'testing-id',
    buttonStyle: 'secondary'
  },
  decorators: [
    ButtonStory => (
      <div style={{ width: '240px', border: '1px solid orange' }}>
        <ButtonStory />
      </div>
    )
  ]
}

/**
 * Button used for a tertiary call to action. Lowest level of importance.
 */
export const Text = {
  render: args => <Button {...args} />,
  args: {
    label: 'Button',
    id: 'testing-id',
    buttonStyle: 'text'
  },
  decorators: [
    ButtonStory => (
      <div style={{ width: '240px', border: '1px solid orange' }}>
        <ButtonStory />
      </div>
    )
  ]
}

/**
 * Disabled the button interactivity.
 */
export const Disabled = {
  render: args => <Button {...args} />,
  args: {
    label: 'Button',
    id: 'testing-id',
    buttonStyle: 'primary',
    disabled: true
  },
  decorators: [
    ButtonStory => (
      <div style={{ width: '240px', border: '1px solid orange' }}>
        <ButtonStory />
      </div>
    )
  ]
}

const meta = {
  title: "Components/Shared/Button",
  component: Button,
  tags: ['autodocs']
};

export default meta