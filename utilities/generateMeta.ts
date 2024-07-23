import type { Metadata } from 'next'
import { env } from '@/env.mjs'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import type { Page, Post } from 'payload-types'

export const generateMeta = async (args: {
  doc: Page | Post
  // eslint-disable-next-line @typescript-eslint/require-await
}): Promise<Metadata> => {
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  const { doc } = args || {}

  const ogImage =
    typeof doc.meta?.image === 'object' &&
    doc.meta.image !== null &&
    'url' in doc.meta.image &&
    `${env.NEXT_PUBLIC_PAYLOAD_URL}${doc.meta.image.url}`

  const title = doc.meta?.title
    ? doc.meta.title + ' | Payload Website Template'
    : 'Payload Website Template'

  return {
    description: doc.meta?.description,
    openGraph: mergeOpenGraph({
      description: doc.meta?.description ?? undefined,
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
      title,
      url: Array.isArray(doc.slug) ? doc.slug.join('/') : '/',
    }),
    title,
  }
}
