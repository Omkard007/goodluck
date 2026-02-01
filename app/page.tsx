import { HeroSection } from '@/components/home/HeroSection'
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection'
import { MenuShowcaseSection } from '@/components/home/MenuShowcaseSection'
import  Navbar  from '@/components/home/Navbar'
import Cta from "@/components/home/cta"
import { ReviewMarquee } from '@/components/home/review-maarquee'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <WhyChooseUsSection />
      <MenuShowcaseSection />
      <ReviewMarquee />
      <Cta />

    </div>
  )
}
