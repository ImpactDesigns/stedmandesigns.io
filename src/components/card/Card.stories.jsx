import React from 'react'
import Card from './Card'

/**
 * Story description.
 */
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
  gridTemplateColumns: 'repeat(12, 1fr)'
}

const wrapperStyles = {
  gridColumn: '1 / 5'
}

const meta = {
  title: 'Shared/Card',
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