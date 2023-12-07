import React from 'react'
import Section from './Section'

export const Default = {
  render: (args) => <Section {...args} />,
  args: {
    children: (
      <div style={{ border: '1px solid orange', gridColumn: 'span 12' }}>
        <div>
          <h1 style={{ margin: '0px' }}>Hello world</h1>
          <h3 style={{ margin: '0px' }}>Just testing this out</h3>
        </div>
      </div>
    )
  }
}

const meta = {
  title: 'Shared/Section',
  component: Section,
  tags: ['autodocs']
}

export default meta