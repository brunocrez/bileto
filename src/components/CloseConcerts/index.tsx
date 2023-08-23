import Image from 'next/image'

export function CloseConcerts() {
  return (
    <section className="w-full max-w-7xl mx-auto px-10 my-12">
      <h2 className="text-3xl font-bold tracking-wider mb-1">próximos shows</h2>
      <p className="text-lg tracking-wider mb-6">não perca tempo!</p>
      <div className="flex ">
        <div>
          <Image
            className="rounded-lg overflow-hidden"
            src="/images/alter_bridge.jpg"
            width={800}
            height={800}
            alt="alter bridge concert"
          />
        </div>
      </div>
    </section>
  )
}
