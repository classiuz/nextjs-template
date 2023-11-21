'use client'
import { ThemeProvider as PackageThemeProvider } from 'next-themes'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <PackageThemeProvider attribute="class">
      {children}
    </PackageThemeProvider>
  )
}
