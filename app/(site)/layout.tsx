import { RefreshRouteOnSave } from '@/components/refreshRouteOnSave'
import { cn } from '@/lib/utils'

import './globals.css'

import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

const fontSans = localFont({
  src: [
    {
      weight: '800',
      path: './fonts/PPMonumentExtended-Black.woff2',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-sans',
})

const fontSerif = localFont({
  src: [
    {
      weight: '100',
      path: './fonts/editorial-new.woff2',
      style: 'normal',
    },
    {
      weight: '100',
      path: './fonts/editorial-new-italic.woff2',
      style: 'italic',
    },
    {
      weight: '200',
      path: './fonts/editorial-new.woff2',
      style: 'normal',
    },
    {
      weight: '200',
      path: './fonts/editorial-new-italic.woff2',
      style: 'italic',
    },
    {
      weight: '300',
      path: './fonts/editorial-new.woff2',
      style: 'normal',
    },
    {
      weight: '300',
      path: './fonts/editorial-new-italic.woff2',
      style: 'italic',
    },
    {
      weight: '400',
      path: './fonts/editorial-new.woff2',
      style: 'normal',
    },
    {
      weight: '400',
      path: './fonts/editorial-new-italic.woff2',
      style: 'italic',
    },
    {
      weight: '475',
      path: './fonts/editorial-new.woff2',
      style: 'normal',
    },
    {
      weight: '475',
      path: './fonts/editorial-new-italic.woff2',
      style: 'italic',
    },
    {
      weight: '600',
      path: './fonts/editorial-new.woff2',
      style: 'normal',
    },
    {
      weight: '600',
      path: './fonts/editorial-new-italic.woff2',
      style: 'italic',
    },
    {
      weight: '700',
      path: './fonts/editorial-new.woff2',
      style: 'normal',
    },
    {
      weight: '700',
      path: './fonts/editorial-new-italic.woff2',
      style: 'italic',
    },
    {
      weight: '800',
      path: './fonts/editorial-new.woff2',
      style: 'normal',
    },
    {
      weight: '800',
      path: './fonts/editorial-new-italic.woff2',
      style: 'italic',
    },
    {
      weight: '900',
      path: './fonts/editorial-new.woff2',
      style: 'normal',
    },
    {
      weight: '900',
      path: './fonts/editorial-new-italic.woff2',
      style: 'italic',
    },
  ],
  display: 'swap',
  variable: '--font-serif',
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
  openGraph: {
    type: 'website',
    siteName: 'Table Church',
    title: 'Table Church',
    description:
      'Real community. Real discipleship. Real revival. St Pete saved.',
    images: [
      {
        url: 'https://table-church.com/opengraph.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html
      className={
        'display-height overflow-hidden overscroll-none [scroll-behavior:smooth]'
      }
      lang={'en'}
    >
      <head>
        <script async src={'https://js.churchcenter.com/modal/v1'} />
      </head>
      <body
        className={cn(
          'flew-row display-height flex w-full overflow-hidden font-sans antialiased',
          fontSans.variable,
          fontSerif.variable,
        )}
      >
        <RefreshRouteOnSave />

        <main className={'bg-page-gradient flex w-full flex-col'}>
          {children}
        </main>
      </body>
    </html>
  )
}
