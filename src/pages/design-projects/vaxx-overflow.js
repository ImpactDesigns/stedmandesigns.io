import React from 'react'
import Layout from '../../components/Layout'
import { HeroSection, 
        OverviewSection,
        DiscoverSection 
} from '../../components/vaxx-page'

export default function VaxxOverflowProjectPage() {
  return (
    <div>
        <Layout>
            <HeroSection />
            <OverviewSection />
            <DiscoverSection />
        </Layout>
    </div>
  )
}
