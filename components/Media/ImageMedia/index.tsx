'use client'

import type { FC } from 'react'
import { useState } from 'react'
import type { StaticImageData } from 'next/image'
import NextImage from 'next/image'
import cssVariables from '@/app/cssVariables'
import type { Props as MediaProps } from '@/components/Media/types'
import { env } from '@/env.mjs'
import { cn } from '@/utilities/cn'

const { breakpoints } = cssVariables

export const ImageMedia: FC<MediaProps> = (props) => {
  const {
    alt: altFromProps,
    fill,
    imgClassName,
    onClick,
    onLoad: onLoadFromProps,
    priority,
    resource,
    size: sizeFromProps,
    src: srcFromProps,
  } = props

  const [_isLoading, setIsLoading] = useState(true)

  let width: number | undefined | null
  let height: number | undefined | null
  let alt = altFromProps
  let src: StaticImageData | string = srcFromProps ?? ''

  if (!src && resource && typeof resource === 'object') {
    const {
      alt: altFromResource,
      filename: _fullFilename,
      height: fullHeight,
      url,
      width: fullWidth,
    } = resource

    width = fullWidth
    height = fullHeight
    alt = altFromResource

    src = `${env.NEXT_PUBLIC_PAYLOAD_URL}${url}`
  }

  // NOTE: this is used by the browser to determine which image to download at different screen sizes
  const sizes = sizeFromProps
    ? sizeFromProps
    : Object.entries(breakpoints)
        .map(([, value]) => `(max-width: ${value}px) ${value}px`)
        .join(', ')

  return (
    <NextImage
      alt={alt ?? ''}
      className={cn(imgClassName)}
      fill={fill}
      height={!fill && height ? height : undefined}
      onClick={onClick}
      onLoad={() => {
        setIsLoading(false)
        if (typeof onLoadFromProps === 'function') {
          onLoadFromProps()
        }
      }}
      priority={priority}
      quality={90}
      sizes={sizes}
      src={src}
      width={!fill && width ? width : undefined}
    />
  )
}
