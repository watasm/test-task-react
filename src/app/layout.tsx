import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Providers from '@/providers'
import LeftMenu from '@/components/LeftMenu'

import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className='w-full h-full flex'>
            <LeftMenu />
            <main className='w-full'>
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
