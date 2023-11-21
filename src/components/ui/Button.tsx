import clsx from 'clsx'
import Icon from '@/ui/Icon'
import { type IconProps } from '@/lib/types'
import { type AnchorHTMLAttributes } from 'react'

interface CommonProps {
  variant?: 'primary' | 'outline' | 'transparent' | 'error' | 'done' | 'warning' | 'info' | 'surface' | 'none'
  className?: string
  icon?: IconProps
  isDisabled?: boolean
  children?: string
}

type ButtonProps =
  | (CommonProps & {
    type?: 'button'
    onClick: () => void
  }) | (CommonProps & {
    type: 'link'
    href: string
    target?: AnchorHTMLAttributes<HTMLAllCollection>['target']
    rel?: AnchorHTMLAttributes<HTMLAllCollection>['rel']
  })

export default function Button(props: ButtonProps) {
  const { variant = 'none', className, icon, isDisabled, children, type = 'button', ...rest } = props

  const renderClassName = clsx('rounded-md transition-colors duration-100', {
    'bg-primary px-4 py-1 text-on-primary hover:brightness-110': variant === 'primary',
    'bg-error px-4 py-1 text-on-error hover:brightness-110': variant === 'error',
    'bg-done px-4 py-1 text-on-done hover:brightness-110': variant === 'done',
    'bg-warning px-4 py-1 text-on-warning hover:brightness-110': variant === 'warning',
    'bg-info px-4 py-1 text-on-info hover:brightness-110': variant === 'info',
    'rounded-md bg-surface-varient p-1 text-xl text-on-surface/80 hover:text-on-surface': variant === 'surface',
    'border border-outline p-1 hover:bg-surface-varient/60 hover:text-primary': variant === 'outline',
    'p-1 text-inherit hover:bg-current-shadow': variant === 'transparent',
    'text-inherit': variant === 'none',
    'pointer-events-none opacity-60': isDisabled
  }, className)

  const childrenWithIcon = icon && (
    <span className='inline-flex gap-2 items-center'>
      <Icon icon={icon} />
      {children}
    </span>
  )

  return type === 'link'
    ? (
    <a {...rest} className={renderClassName}>
      {childrenWithIcon ?? children}
    </a>
      )
    : (
    <button {...rest} className={renderClassName} disabled={isDisabled}>
      {childrenWithIcon ?? children}
    </button>
      )
}
