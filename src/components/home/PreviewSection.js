import React from 'react'
import styled from 'styled-components'
import DemoCard from '../demoCard/DemoCard'

const StyledSection = styled.section`
    padding: 4px 20px 20px 20px;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;

    & > div:last-child {
        margin-bottom: 0px;
    }

    @media (min-width: 768px) {
        padding: 20px 80px 20px 80px;
    }

    @media (min-width: 1024px) {
        gap: 40px;
        padding-top: 40px;
        padding-left: 144px;
        padding-right: 144px;
    }
`

const projectsList = [
  {
    title: 'Vaxx Overflow',
    description: 'Reduces Covid-19 vaccine waste by matching eligible vaccination seekers with providers that have remaining unexpired doses.',
    projectPath: '/design-projects/vaxx-overflow',
    color: '#E9EFF5'
  },
  // {
  //   title: 'Mentor Hub',
  //   description: 'Placeholder copy',
  //   projectPath: '/design-projects/vaxx-overflow',
  //   color: '#F5EDE9'
  // }
]

export default function PreviewSection() {
  return (
    <StyledSection>
      {projectsList.map((project, idx) => <DemoCard project={project} key={idx} />)}
    </StyledSection>
  )
}
