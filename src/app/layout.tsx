import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Providers } from '@/components/Providers'
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
    <html lang="en" className={`${tajawal.variable}`}>
      <body className="flex h-screen flex-col">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
