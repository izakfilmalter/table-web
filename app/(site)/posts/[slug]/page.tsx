import React, { cache } from 'react'
import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import PageClient from '@/app/(site)/posts/[slug]/page.client'
import { RelatedPosts } from '@/blocks/RelatedPosts'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import RichText from '@/components/RichText'
import { PostHero } from '@/heros/PostHero'
import { generateMeta } from '@/utilities/generateMeta'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { Option, pipe } from 'effect'

export async function generateStaticParams() {
  const payload = await getPayloadHMR({ config: configPromise })
  const posts = await payload.find({
    collection: 'posts',
    draft: false,
    limit: 1000,
    overrideAccess: false,
  })

  return posts.docs.map(({ slug }) => slug)
}

export default async function Post({ params: { slug = '' } }) {
  const url = '/posts/' + slug
  const post = await queryPostBySlug({ slug })

  if (!post) return <PayloadRedirects url={url} />

  return (
    <article className={'pb-16 pt-16'}>
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      <PostHero post={post} />

      <div className={'flex flex-col gap-4 pt-8'}>
        <div
          className={
            'container grid-rows-[1fr] lg:grid lg:grid-cols-[1fr_48rem_1fr]'
          }
        >
          <RichText
            className={
              'col-span-3 col-start-1 grid-rows-[1fr] lg:grid lg:grid-cols-subgrid'
            }
            content={post.content}
            enableGutter={false}
          />
        </div>

        <RelatedPosts
          className={'mt-12'}
          docs={(post.relatedPosts ?? []).filter((x) => typeof x === 'object')}
        />
      </div>
    </article>
  )
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await queryPostBySlug({ slug })

  return pipe(
    post,
    Option.fromNullable,
    Option.match({
      onNone: () => ({}),
      onSome: (x) => generateMeta({ doc: x }),
    }),
  )
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = draftMode()

  const payload = await getPayloadHMR({ config: configPromise })

  const result = await payload.find({
    collection: 'posts',
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
