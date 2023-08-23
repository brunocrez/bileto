import Image from 'next/image'

export function Footer() {
  return (
    <footer className="w-full bg-gray-900 py-5">
      <div className="w-full max-w-7xl px-10 mx-auto flex items-center gap-8">
        <Image src="ticket.svg" width={36} height={36} alt="logo" />
        <p className="text-white text-md">Bileto &copy; - todos os direitos reservados.</p>
        <p className="text-gray-400 text-sm">Copyright &copy; 2023.</p>
      </div>
    </footer>
  )
}
