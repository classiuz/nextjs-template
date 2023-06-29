import icons from '@/data/IconsList'
export type IconName = keyof typeof icons

interface IconProps {
  iconName: IconName
  iconSize?: number
  screenReader?: string
  className?: string
}

export default function Icon({ iconName, iconSize, screenReader, className }: IconProps) {
  const foundIcon = icons[iconName] || null

  return (
    <span className={`inline-flex h-full items-center${className ? ` ${className}` : ''}`} style={{ fontSize: iconSize || 'inherit' }}>
      {foundIcon}
      {screenReader ? <span className="sr-only">{screenReader}</span> : null}
    </span>
  )
}
