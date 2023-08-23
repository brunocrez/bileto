interface Props {
  title: string
  description: string
}

export function SectionTitle({ title, description }: Props) {
  return (
    <>
      <h2 className="text-3xl font-bold tracking-wider mb-1">{title}</h2>
      <p className="text-lg tracking-wider mb-6">{description}</p>
    </>
  )
}
