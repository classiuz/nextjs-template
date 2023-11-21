import { type icons } from '@/lib/data'
import { type IconBaseProps } from 'react-icons/lib'

export type Prettify<T> = {
  [K in keyof T]: T[K]
}

export type IconProps = keyof typeof icons | IconBaseProps & {
  value: keyof typeof icons
}
