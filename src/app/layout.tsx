import './globals.css'
import { Tajawal } from 'next/font/google'
import ThemeProvider from '@/hooks/ThemeProvider'
import Footer from '@/components/Footer'

const tajawal = Tajawal({
  variable: '--font-tajawal',
  weight: ['500', '900'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Next.js Template By ClaSSius',
  description: 'Next.js Template used in my personal projects.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${tajawal.variable} overflow-x-hidden overflow-y-scroll`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
