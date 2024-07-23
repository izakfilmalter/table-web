import React, { Fragment } from 'react'
import { ImageMedia } from '@/components/Media/ImageMedia'
import type { Props } from '@/components/Media/types'
import { VideoMedia } from '@/components/Media/VideoMedia'

export const Media: React.FC<Props> = (props) => {
  const { className, htmlElement = 'div', resource } = props

  const isVideo =
    typeof resource === 'object' && resource.mimeType?.includes('video')
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
