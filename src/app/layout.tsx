import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import HeaderTop from '@/components/HeaderTop'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ainka Solutions',
  description: 'Ainka Solutions',
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: '#f9fafb',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
      </head>
      <body className={`${inter.className} bg-gray-50`}>
        <div className="min-h-screen flex relative">
          <input id="nav-toggle" type="checkbox" className="peer sr-only" />

          {/* <NavbarLeft /> */}

          <div className="flex-1 flex flex-col">
            <HeaderTop />
            <div>
              <Providers>{children}</Providers>
            </div>
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
