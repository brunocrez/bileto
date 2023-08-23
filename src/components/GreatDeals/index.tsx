import Image from 'next/image'

import { BsTicketPerforated } from 'react-icons/bs'
import { SectionTitle } from '../SectionTitle'

export function GreatDeals() {
  return (
    <section className="w-full max-w-7xl mx-auto px-10 py-16">
      <SectionTitle title="shows no precinho" description="você não vai ver esses preços outra vez!" />
      <div className="grid grid-cols-1 grid-rows-4 lg:grid-cols-2 lg:grid-rows-2 gap-8">
        <div className="cursor-pointer relative aspect-video lg:aspect-auto overflow-hidden">
          <Image className="object-cover rounded-md" src="/images/john_mayer.jpg" alt="" fill />
          <div className="absolute right-3 bottom-3 bg-white w-24 flex gap-4 items-center px-2 py-2 rounded-md">
            <BsTicketPerforated size={20} />
            <span className="text-xs font-bold">R$ 55</span>
          </div>
        </div>
        <div className="cursor-pointer relative aspect-video overflow-hidden">
          <Image className="object-cover rounded-md" src="/images/sting.jpg" alt="" fill />
          <div className="absolute right-3 bottom-3 bg-white w-24 flex gap-4 items-center px-2 py-2 rounded-md">
            <BsTicketPerforated size={20} />
            <span className="text-xs font-bold">R$ 30</span>
          </div>
        </div>
        <div className="cursor-pointer relative aspect-video overflow-hidden">
          <Image className="object-cover rounded-md" src="/images/berilo.jpg" alt="" fill />
          <div className="absolute right-3 bottom-3 bg-white w-24 flex gap-4 items-center px-2 py-2 rounded-md">
            <BsTicketPerforated size={20} />
            <span className="text-xs font-bold">R$ 35</span>
          </div>
        </div>
        <div className="cursor-pointer relative aspect-video overflow-hidden">
          <Image className="object-cover rounded-md" src="/images/venosa.jpg" alt="" fill />
          <div className="absolute right-3 bottom-3 bg-white w-24 flex gap-4 items-center px-2 py-2 rounded-md">
            <BsTicketPerforated size={20} />
            <span className="text-xs font-bold">R$ 25</span>
          </div>
        </div>
      </div>
    </section>
  )
}
