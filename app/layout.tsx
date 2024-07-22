import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { cn } from '@/lib/utils'

import './globals.css'

import type { ReactNode } from 'react'

const fontSans = localFont({
  src: [
    {
      weight: '750',
      path: './fonts/NeueHaasDisplayBold.woff2',
      style: 'normal',
    },
    {
      weight: '750',
      path: './fonts/NeueHaasDisplayBoldItalic.woff2',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Table Church',
  description: 'A church for the harvest.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang={'en'}>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  )
}
