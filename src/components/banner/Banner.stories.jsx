import React from "react";
import Banner from "./Banner";

const BannerTemplate = (templateArgs) => {
  return <Banner {...templateArgs} />;
};

export const Message = {
  render: (args) => <BannerTemplate {...args} />,
  args: {
    message: "This is a banner message",
  },
};

export const Children = {
  render: (args) => <BannerTemplate {...args} />,
  args: {
    children: (
      <p style={{ margin: "0px", color: "white" }}>
        This is a banner children prop.
      </p>
    ),
  },
};

const meta = {
  title: "Components/Shared/Banner",
  component: Banner,
  tags: ["autodocs"],
  decorators: [
    (BannerStory) => (
      <div style={{ height: "90vh", border: "2px solid hotpink" }}>
        <BannerStory />
      </div>
    ),
  ],
};

export default meta;
