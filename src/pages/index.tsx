import { Header } from '@/components/Header'
import { CloseConcerts } from '@/components/CloseConcerts'
import { General } from '@/components/General'
import { GreatDeals } from '@/components/GreatDeals'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <General />
      <CloseConcerts />
      <GreatDeals />
      <Footer />
    </main>
  )
}
