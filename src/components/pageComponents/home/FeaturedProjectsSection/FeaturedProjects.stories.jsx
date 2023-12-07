import React from 'react'
import FeaturedProjects from './FeaturedProjects'

export const Default = {
    render: args => <FeaturedProjects {...args} />
}

const meta = {
    title: 'Pages/Home page/FeaturedProjects',
    components: FeaturedProjects
}

export default meta