import React from "react";
import Dropdown from "./Dropdown";

export const Default = {
  render: (args) => <Dropdown {...args} />,
  args: {
    options: [
      { label: "Development", value: "dev" },
      { label: "Design", value: "design" },
    ],
    isFullWidth: true,
  },
};

export const FullWidth = {
  render: (args) => <Dropdown {...args} />,
  args: {
    options: [
      { label: "Development", value: "dev" },
      { label: "Design", value: "design" },
    ],
    isFullWidth: true,
  },
};

const meta = {
  title: "Shared/Dropdown",
  component: Dropdown,
  decorators: [
    (DropdownStory) => (
      <div style={{ width: "400px" }}>
        <DropdownStory />
      </div>
    ),
  ],
};

export default meta;
