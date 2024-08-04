'use client'

import type { FC } from 'react'
import { useRouter } from 'next/navigation.js'
import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react'

import { env } from '@/env.mjs'

export const RefreshRouteOnSave: FC = () => {
  const router = useRouter()

  return (
    <PayloadLivePreview
      refresh={() => router.refresh()}
      serverURL={env.NEXT_PUBLIC_PAYLOAD_URL}
    />
  )
}
