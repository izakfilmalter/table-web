import React from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { env } from '@/env.mjs'
import { cn } from '@/lib/utils'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'

import './globals.css'

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

  metadataBase: new URL(
    env.NEXT_PUBLIC_PAYLOAD_URL || 'https://payloadcms.com',
  ),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={'en'} suppressHydrationWarning>
      <head>
        <InitTheme />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        <Providers>
          <AdminBar />
          <LivePreviewListener />

          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
