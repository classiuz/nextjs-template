'use client'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleTheme = () => {
    resolvedTheme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <header className="flex flex-col items-center gap-4 py-4">
      <div className="flex w-full">
        <div className="flex w-full justify-center">
          <p className="text-4xl font-bold tracking-wide text-light-pri dark:text-dark-pri">PROJECT NAME</p>
        </div>
        <div className="relative flex w-fit items-center justify-end">
          <button
            onClick={handleTheme}
            className="absolute right-32 text-2xl hover:text-light-pri dark:hover:text-dark-pri"
          >
            {resolvedTheme === 'light' ? <MdDarkMode /> : <MdLightMode />}
          </button>
        </div>
      </div>
      <p className="w-3/4 text-center text-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus veniam expedita fugiat quae nostrum quia!
        Mollitia optio repellat molestiae voluptas, sint nihil fuga animi adipisci ut autem sunt laudantium quibusdam!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum est laborum deleniti! Natus illo velit a
        incidunt, nulla blanditiis odit mollitia libero deserunt, cumque iure saepe? Ut ipsam quam esse.
      </p>
    </header>
  )
}
