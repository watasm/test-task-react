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
            <div className='w-full px-5 py-5'>
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
