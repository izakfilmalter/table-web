import React from 'react'
import clsx from 'clsx'
import RichText from 'src/app/components/RichText'

import type { Post } from '../../../payload-types'
import { Card } from '../../components/Card'

export type RelatedPostsProps = {
  className?: string
  docs?: Array<Post>
  introContent?: any
}

export const RelatedPosts: React.FC<RelatedPostsProps> = (props) => {
  const { className, docs, introContent } = props

  return (
    <div className={clsx('container', className)}>
      {introContent && <RichText content={introContent} enableGutter={false} />}

      <div
        className={
          'grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3'
        }
      >
        {docs?.map((doc, index) => {
          if (typeof doc === 'string') return null

          return (
            <Card key={index} doc={doc} relationTo={'posts'} showCategories />
          )
        })}
      </div>
    </div>
  )
}
