import { icons } from '@/lib/data'
import { type IconProps } from '@/lib/types'

export default function Icon({ icon }: { icon: IconProps }) {
  const { value, ...props } = typeof icon === 'string'
    ? { value: icon }
    : icon

  const renderIcon = icons[value] || icons.code

  return renderIcon({ ...props })
}
