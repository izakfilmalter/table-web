import { Navigation } from '@/components/navigation'
import { RefreshRouteOnSave } from '@/components/refreshRouteOnSave'
import { ScrollArea } from '@/components/ui/scroll-area'
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

const fontSerif = localFont({
  src: [
    {
      weight: '100',
      path: './fonts/editorial-new.woff2',
      style: 'normal',
    },
    {
      weight: '100',
      path: './fonts/editorial-new.woff2',
      style: 'italic',
    },
    {
      weight: '200',
      path: './fonts/editorial-new.woff2',
      style: 'normal',
    },
    {
      weight: '200',
      path: './fonts/editorial-new.woff2',
      style: 'italic',
    },
    {
      weight: '300',
      path: './fonts/editorial-new.woff2',
      style: 'normal',
    },
    {
      weight: '300',
      path: './fonts/editorial-new.woff2',
      style: 'italic',
    },
    {
      weight: '400',
      path: './fonts/editorial-new.woff2',
      style: 'normal',
    },
    {
      weight: '400',
      path: './fonts/editorial-new.woff2',
      style: 'italic',
    },
    {
      weight: '475',
      path: './fonts/editorial-new.woff2',
      style: 'normal',
    },
    {
      weight: '475',
      path: './fonts/editorial-new.woff2',
      style: 'italic',
    },
    {
      weight: '600',
      path: './fonts/editorial-new.woff2',
      style: 'normal',
    },
    {
      weight: '600',
      path: './fonts/editorial-new.woff2',
      style: 'italic',
    },
    {
      weight: '700',
      path: './fonts/editorial-new.woff2',
      style: 'normal',
    },
    {
      weight: '700',
      path: './fonts/editorial-new.woff2',
      style: 'italic',
    },
    {
      weight: '800',
      path: './fonts/editorial-new.woff2',
      style: 'normal',
    },
    {
      weight: '800',
      path: './fonts/editorial-new.woff2',
      style: 'italic',
    },
    {
      weight: '900',
      path: './fonts/editorial-new.woff2',
      style: 'normal',
    },
    {
      weight: '900',
      path: './fonts/editorial-new.woff2',
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html
      className={
        'min-h-[max(calc(100%+env(safe-area-inset-top)),100dvh)] overflow-hidden overscroll-none'
      }
      lang={'en'}
    >
      <head>
        <script src={'https://js.churchcenter.com/modal/v1'}></script>
      </head>
      <body
        className={cn(
          'flew-row flex h-dvh w-full overflow-hidden font-sans antialiased',
          fontSans.variable,
          fontSerif.variable,
        )}
      >
        <RefreshRouteOnSave />

        <main className={'bg-page-gradient flex w-full flex-col'}>
          <Navigation />

          <ScrollArea>
            <div
              className={
                'pt-navigation-height flex min-h-dvh w-dvw flex-col overflow-x-hidden'
              }
            >
              {children}
            </div>
          </ScrollArea>
        </main>
      </body>
    </html>
  )
}
