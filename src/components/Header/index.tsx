import Image from 'next/image'

import { GiHamburgerMenu } from 'react-icons/gi'

import { SearchInput } from '@/components/SearchInput'

export function Header() {
  return (
    <header className="w-full bg-gray-900 px-10 py-5">
      <div className="flex flex-col gap-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* hamburger menu */}
          <div className="lg:hidden cursor-pointer">
            <GiHamburgerMenu color="93B1A6" size={30} />
          </div>
          {/* logo + search input */}
          <div className="hidden lg:flex gap-12 items-center flex-1">
            <Image src="ticket.svg" width={36} height={36} alt="logo" />
            <SearchInput maxWidth />
          </div>

          {/* logo only */}
          <div className="lg:hidden">
            <Image src="ticket.svg" width={36} height={36} alt="logo" />
          </div>
          {/* buttons group */}
          <div className="flex gap-6 items-center">
            <button className="text-white p-1 hover:text-[#23ed18] rounded-md transition ease-in-out duration-300">
              faq
            </button>
            <button className="text-white p-1 hover:text-[#23ed18] rounded-md transition ease-in-out duration-300">
              entrar
            </button>
            <button className="hidden lg:flex px-4 py-3 bg-[#23ed18] hover:scale-110 transition ease-in-out duration-300 text-gray-700 rounded-lg font-bold">
              vender ingresso
            </button>
          </div>
        </div>
        {/* input second row */}
        <div className="lg:hidden">
          <SearchInput />
        </div>
      </div>
    </header>
  )
}
