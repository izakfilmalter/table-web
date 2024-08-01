import { RefreshRouteOnSave } from '@/components/refreshRouteOnSave'
import { cn } from '@/lib/utils'

import './globals.css'

import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const fontSans = localFont({
  src: [
    {
      weight: '400',
      path: './fonts/NeueHaasDisplayRoman.woff2',
      style: 'normal',
    },
    {
      weight: '400',
      path: './fonts/NeueHaasDisplayRomanItalic.woff2',
      style: 'italic',
    },
    {
      weight: '500',
      path: './fonts/NeueHaasDisplayMedium.woff2',
      style: 'normal',
    },
    {
      weight: '500',
      path: './fonts/NeueHaasDisplayMediumItalic.woff2',
      style: 'italic',
    },
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
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16' },
    ],
  },
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
        <RefreshRouteOnSave />

        {/*<Navigation />*/}

        {children}
      </body>
    </html>
  )
}
