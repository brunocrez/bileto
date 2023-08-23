import Image from 'next/image'

import { BsTicketPerforated } from 'react-icons/bs'
import { SectionTitle } from '../SectionTitle'

export function CloseConcerts() {
  return (
    <section className="w-full max-w-7xl mx-auto px-10 py-16">
      <SectionTitle title="próximos shows" description="não perca tempo!" />
      <div className="grid grid-cols-2 grid-rows-2 lg:grid-cols-3 gap-8">
        {/* main image */}
        <div className="cursor-pointer relative aspect-video lg:aspect-auto overflow-hidden col-span-2 lg:row-span-full">
          <Image className="object-cover rounded-md" src="/images/alter_bridge.jpg" alt="" fill />
          <div className="absolute right-3 bottom-3 bg-white w-24 flex gap-4 items-center px-2 py-2 rounded-md">
            <BsTicketPerforated size={20} />
            <span className="text-xs font-bold">R$ 120</span>
          </div>
        </div>
        {/* side images */}
        <div className="cursor-pointer relative aspect-video overflow-hidden">
          <Image className="object-cover rounded-md" src="/images/slash.jpg" alt="" fill />
          <div className="absolute right-3 bottom-3 bg-white w-24 flex gap-4 items-center px-2 py-2 rounded-md">
            <BsTicketPerforated size={20} />
            <span className="text-xs font-bold">R$ 85</span>
          </div>
        </div>
        <div className="cursor-pointer relative aspect-video overflow-hidden">
          <Image className="object-cover rounded-md" src="/images/the_lumineers.jpg" alt="" fill />
          <div className="absolute right-3 bottom-3 bg-white w-24 flex gap-4 items-center px-2 py-2 rounded-md">
            <BsTicketPerforated size={20} />
            <span className="text-xs font-bold">R$ 60</span>
          </div>
        </div>
      </div>
    </section>
  )
}
