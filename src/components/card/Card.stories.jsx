import React from 'react'
import Card from './Card'

export const Default = {
  render: args => <Card {...args} />,
  args: {
    children: (
      <div>
        <h3 style={{ margin: '0px' }}>Card heading</h3>
      </div>
    )
  }
}

const gridContainerStyles = {
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  // border: '2px solid black'
}

const wrapperStyles = {
  gridColumn: '1 / 5',
  // background: 'lightgreen'
}

const meta = {
  title: 'Components/Shared/Card',
  component: Card,
  tags: ["autodocs"],
  decorators: [
    CardStory => (
      <div style={gridContainerStyles}>
        <div style={wrapperStyles}>
          <CardStory />
        </div>
      </div>
    )
  ]
}

export default meta