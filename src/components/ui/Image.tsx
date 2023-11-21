'use client'
import { useTheme } from 'next-themes'

interface ImageProps {
  name: string
  alt?: string
  width?: number
  height?: number
}

export default function Image({ name, alt, width, height }: ImageProps) {
  const { theme } = useTheme()

  const imageUrl = theme === 'light' ? `../${name}-dark.svg` : `../${name}-light.svg`

  return (
    <img
      src={imageUrl}
      alt={alt}
      style={{ width: width ?? 'inherit', height: height ?? 'inherit' }}
    />
  )
}
