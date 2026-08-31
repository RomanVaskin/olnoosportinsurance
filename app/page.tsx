import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ProductSelection } from '@/components/product-selection'
import { PopularSports } from '@/components/popular-sports'
import { Coverage } from '@/components/coverage'
import { HowItWorks } from '@/components/how-it-works'
import { Competitions } from '@/components/competitions'
import { Federations } from '@/components/federations'
import { ChildrenInsurance } from '@/components/children-insurance'
import { TeamInsurance } from '@/components/team-insurance'
import { Faq } from '@/components/faq'
import { Partners } from '@/components/partners'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <ProductSelection />
        <PopularSports />
        <Coverage />
        <HowItWorks />
        <Competitions />
        <Federations />
        <ChildrenInsurance />
        <TeamInsurance />
        <Faq />
        <Partners />
      </main>
      <SiteFooter />
    </div>
  )
}
