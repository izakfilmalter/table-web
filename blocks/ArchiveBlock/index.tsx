import type { FC } from 'react'
import type { ArchiveBlockProps } from '@/blocks/ArchiveBlock/types'
import { CollectionArchive } from '@/components/CollectionArchive'
import RichText from '@/components/RichText'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { Array, Boolean, Option, pipe } from 'effect'
import type { Post } from 'payload-types'

export const ArchiveBlock: FC<
  ArchiveBlockProps & {
    id?: string
  }
> = async (props) => {
  const {
    id,
    categories,
    introContent,
    limit = 3,
    populateBy,
    selectedDocs,
  } = props

  let posts: Array<Post> = []

  if (populateBy === 'collection') {
    const payload = await getPayloadHMR({ config: configPromise })

    const flattenedCategories = (categories ?? []).map((category) => {
      if (typeof category === 'object') return category.id
      else return category
    })

    const fetchedPosts = await payload.find({
      collection: 'posts',
      depth: 1,
      limit: limit ?? 1,
      ...(flattenedCategories.length > 0
        ? {
            where: {
              categories: {
                in: flattenedCategories,
              },
            },
          }
        : {}),
    })

    posts = fetchedPosts.docs
  } else {
    posts = pipe(
      selectedDocs,
      Option.fromNullable,
      Option.getOrElse((): NonNullable<typeof selectedDocs> => []),
      Array.filterMap((x) =>
        pipe(
          typeof x.value === 'object',
          Boolean.match({
            onFalse: Option.none,
            onTrue: () => Option.some(x.value as Post),
          }),
        ),
      ),
    )
  }

  return (
    <div className={'my-16'} id={`block-${id}`}>
      {introContent && (
        <div className={'container mb-16'}>
          <RichText
            className={'ml-0 max-w-[48rem]'}
            content={introContent}
            enableGutter={false}
          />
        </div>
      )}
      <CollectionArchive posts={posts} />
    </div>
  )
}
