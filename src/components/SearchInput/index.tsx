import { AiOutlineSearch } from 'react-icons/ai'

interface Props {
  maxWidth?: boolean
}

export function SearchInput({ maxWidth }: Props) {
  return (
    <div className={`relative w-full ${maxWidth ? 'max-w-[360px]' : ''}`}>
      <input className="w-full px-3 py-2 text-sm rounded-md outline-none" type="text" name="" id="" />
      <div className="absolute top-1 right-2">
        <AiOutlineSearch size={28} />
      </div>
    </div>
  )
}
