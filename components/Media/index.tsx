import React, { Fragment } from 'react'
import { ImageMedia } from '@/components/Media/ImageMedia'
import type { Props } from '@/components/Media/types'
import { VideoMedia } from '@/components/Media/VideoMedia'

export const Media: React.FC<Props> = (props) => {
  const { className, htmlElement = 'div', resource } = props

  const isVideo =
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typeof resource === 'object' && resource.mimeType?.includes('video')
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-explicit-any
  const Tag = (htmlElement as any) || Fragment

  return (
    <Tag
      {...(htmlElement !== null
        ? {
            className,
          }
        : {})}
    >
      {isVideo ? <VideoMedia {...props} /> : <ImageMedia {...props} />}
    </Tag>
  )
}
