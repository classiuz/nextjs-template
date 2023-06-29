'use client'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import Icon from './Icon'

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
    <button
      className="flex h-full w-full items-center gap-1 rounded-md bg-neutral-700 px-6 py-2 text-neutral-200 hover:bg-neutral-800 dark:bg-neutral-200 dark:text-neutral-800 hover:dark:bg-neutral-300"
      onClick={handleTheme}
      disabled={!mounted}
    >
      {mounted ? (
        <>
          <Icon iconName={isLightModeActive ? 'darkMode' : 'lightMode'} />
          <span>{isLightModeActive ? 'DarkMode' : 'LightMode'}</span>
        </>
      ) : (
        <>
          <Icon iconName='loading' className='animate-spin' />
          <span>Loading....</span>
        </>
      )}
    </button>
  )
}
