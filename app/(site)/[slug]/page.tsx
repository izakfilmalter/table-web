import React, { cache } from 'react'
import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import { Blocks } from '@/components/Blocks'
import { Hero } from '@/components/Hero'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import { homeStatic } from '@/shared/payload/seed/home-static'
import { generateMeta } from '@/utilities/generateMeta'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import type { Page as PageType } from 'payload-types'

export async function generateStaticParams() {
  const payload = await getPayloadHMR({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
  })

  return pages.docs.filter((doc) => doc.slug !== 'home').map(({ slug }) => slug)
}

export default async function Page({ params: { slug = 'home' } }) {
  const url = '/' + slug

  let page: PageType | null

  page = await queryPageBySlug({
    slug,
  })

  // Remove this code once your website is seeded
  if (!page) {
    page = homeStatic
  }

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!page) {
    return <PayloadRedirects url={url} />
  }

  const { hero, layout } = page

  return (
    <article className={'pb-24 pt-16'}>
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      <Hero {...hero} />
      <Blocks blocks={layout} />
    </article>
  )
}

export async function generateMetadata({
  params: { slug = 'home' },
}): Promise<Metadata> {
  const page = await queryPageBySlug({
    slug,
  })

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return generateMeta({ doc: page })
}

const queryPageBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = draftMode()

  const payload = await getPayloadHMR({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    overrideAccess: true,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs[0] ?? null
})
