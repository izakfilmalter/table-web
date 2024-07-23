import React from 'react'
import type { Metadata } from 'next'
import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { env } from '@/env.mjs'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'

import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      // className={cn(GeistSans.variable, GeistMono.variable)}
      lang={'en'}
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
        <link href={'/favicon.ico'} rel={'icon'} sizes={'32x32'} />
        <link href={'/favicon.svg'} rel={'icon'} type={'image/svg+xml'} />
      </head>
      <body>
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

export const metadata: Metadata = {
  metadataBase: new URL(
    env.NEXT_PUBLIC_PAYLOAD_URL || 'https://payloadcms.com',
  ),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@payloadcms',
  },
}
