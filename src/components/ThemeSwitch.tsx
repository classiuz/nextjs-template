'use client'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import Button from '@/ui/Button'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const isLightModeActive = resolvedTheme === 'light'

  const handleTheme = () => {
    isLightModeActive ? setTheme('dark') : setTheme('light')
  }

  return (
    <Button
      variant='primary'
      onClick={handleTheme}
      isDisabled={!mounted}
      icon={{
        value: mounted ? (isLightModeActive ? 'darkMode' : 'lightMode') : 'loading',
        className: mounted ? undefined : 'animate-spin'
      }}
    >
      {mounted ? (isLightModeActive ? 'DarkMode' : 'LightMode') : 'Loading...'}
    </Button>
  )
}
