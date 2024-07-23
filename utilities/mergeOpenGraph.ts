import type { Metadata } from 'next'
import { env } from '@/env.mjs'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: 'An open-source website built with Payload and Next.js.',
  images: [
    {
      url: env.NEXT_PUBLIC_PAYLOAD_URL
        ? `${env.NEXT_PUBLIC_PAYLOAD_URL}/website-template-OG.webp`
        : '/website-template-OG.webp',
    },
  ],
  siteName: 'Payload Website Template',
  title: 'Payload Website Template',
}

export const mergeOpenGraph = (
  og?: Metadata['openGraph'],
): Metadata['openGraph'] => ({
  ...defaultOpenGraph,
  ...og,
  images: og?.images ? og.images : defaultOpenGraph.images,
})
