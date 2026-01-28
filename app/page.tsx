import { Navigation } from '@/components/home/Navigation'
import { HeroSection } from '@/components/home/HeroSection'
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection'
import { MenuShowcaseSection } from '@/components/home/MenuShowcaseSection'
import { SpecialtiesSection } from '@/components/home/SpecialtiesSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <WhyChooseUsSection />
      <MenuShowcaseSection />
      <SpecialtiesSection />
    </div>
  )
}
