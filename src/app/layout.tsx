import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import HeaderTop from '@/components/HeaderTop'
import Providers from './providers'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ainka Solutions',
  description: 'Ainka Solutions',
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: '#020617', // gần với slate-950
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="dark" />
        <meta name="supported-color-schemes" content="dark" />
      </head>
      <body className={`${inter.className} bg-slate-950 text-slate-50 antialiased`}>
        <div className="min-h-screen flex relative">
          <input id="nav-toggle" type="checkbox" className="peer sr-only" />

          {/* <NavbarLeft /> */}

          <div className="flex-1 flex flex-col">
            <HeaderTop />
            <div className="flex-1">
              <Providers>{children}</Providers>
            </div>
            <Footer />
          </div>

          <label
            htmlFor="nav-toggle"
            className="fixed inset-0 bg-black/30 z-40 hidden peer-checked:block sm:hidden"
            aria-hidden="true"
          />
        </div>
      </body>
    </html>
  )
}
