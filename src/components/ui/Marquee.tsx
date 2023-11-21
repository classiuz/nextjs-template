interface MarqueeProps {
  children: React.ReactElement[]
}

export default function Marquee({ children }: MarqueeProps) {
  return (
    <div className="marquee overflow-hidden h-full relative whitespace-nowrap">
      <div className="animate-marquee z-10 flex gap-8 items-center">
        {children}
        {children}
      </div>
    </div>
  )
}
