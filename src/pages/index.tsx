import { Header } from '@/components/Header'
import { CloseConcerts } from '@/components/CloseConcerts'
import { General } from '@/components/General'

export default function Home() {
  return (
    <main>
      <Header />
      <General />
      <CloseConcerts />
    </main>
  )
}
