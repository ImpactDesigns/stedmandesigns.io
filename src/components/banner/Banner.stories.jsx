import React from 'react'
import Banner from './Banner'

export const Default = {
  render: args => <Banner {...args} />,
  args: {
    children: <p style={{ margin: '0px', color: 'white' }}>This is a banner!</p>
  }
}

const meta = {
  title: 'Components/Shared/Banner',
  component: Banner,
  tags: ["autodocs"],
  decorators: [
    BannerStory => (
      <div style={{ height: '90vh', border: '2px solid hotpink' }}>
        <BannerStory />
      </div>
    )
  ]
}

export default meta