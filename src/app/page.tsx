// app/page.tsx
import HeaderTop from '@/components/HeaderTop'

import HomeSection from './_page/HomeSection'
import ServicesSection from './_page/ServicesSection'
import PerformanceSection from './_page/PerformanceSection'
import TeamSection from './_page/TeamSection'
import CaseStudiesSection from './_page/CaseStudiesSection'
import ContactSection from './_page/ContactSection'

export default function HomePage() {
  return (
    <main className="bg-gradient-hero min-h-screen">
      <HomeSection />
      <ServicesSection />
      <PerformanceSection />
      <TeamSection />
      <CaseStudiesSection />
      <ContactSection />
    </main>
  )
}
