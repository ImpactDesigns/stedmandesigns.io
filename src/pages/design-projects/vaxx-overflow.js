import React from 'react'
import Layout from '../../components/Layout'
import { HeroSection, 
        OverviewSection,
        DiscoverSection,
        DevelopSection 
} from '../../components/pageComponents/vaxx-page'

export default function VaxxOverflowProjectPage() {
  return (
    <div>
        <Layout>
            <HeroSection />
            <OverviewSection />
            <DiscoverSection />
            <DevelopSection />
        </Layout>
    </div>
  )
}
