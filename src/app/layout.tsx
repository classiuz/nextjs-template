import './globals.css'
import Providers from '@/utils/Providers'
import Footer from '@/components/Footer'
import { Tajawal } from 'next/font/google'

const tajawal = Tajawal({
  variable: '--font-tajawal',
  weight: ['500', '900'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Template - ClaSSius',
  description: 'Template used in my personal projects.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${tajawal.variable}`} suppressHydrationWarning>
      <body className="flex h-screen flex-col">
        <Providers>
          <div className="absolute z-30">
            <div className="justify-center-end fixed flex w-screen">
              <span className="absolute right-36 -top-36 blur-[100px] z-10 h-72 w-72 bg-purple-400/90 dark:bg-purple-500/60" />
              <span className="absolute right-56 -top-56 blur-[100px] z-20 h-72 w-72 bg-red-400/90 dark:bg-red-500/60" />
              <span className="absolute right-72 -top-72 blur-[100px] z-30 h-72 w-72 bg-orange-400/90 dark:bg-orange-500/60" />
            </div>
          </div>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
