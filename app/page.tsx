import { HeroSection } from '@/components/home/HeroSection'
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection'
import { MenuShowcaseSection } from '@/components/home/MenuShowcaseSection'


export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <WhyChooseUsSection />
      <MenuShowcaseSection />
     
    </div>
  )
}
