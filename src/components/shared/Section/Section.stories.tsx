import React from 'react'
import Section from './Section'

export const Default = {
  // @ts-expect-error 'Section' cannot be used as a JSX component... Delete comment for full error
  render: (args) => <Section {...args} />,
  args: {
    children: (
      <div style={{ border: '1px solid orange', gridColumn: 'span 12' }}>
        <div>
          <p>Hello</p>
        </div>
      </div>
    )
  }
}

const meta = {
  title: 'Components/Shared/Section',
  component: Section
}

export default meta