import { Header } from '@/components/Header'
import { CloseConcerts } from '@/components/CloseConcerts'
import { General } from '@/components/General'
import { GreatDeals } from '@/components/GreatDeals'

export default function Home() {
  return (
    <main>
      <Header />
      <General />
      <CloseConcerts />
      <GreatDeals />
    </main>
  )
}
