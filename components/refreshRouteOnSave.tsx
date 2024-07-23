'use client'

import type { FC } from 'react'
import { useRouter } from 'next/navigation.js'
import { env } from '@/env.mjs'
import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react'

export const RefreshRouteOnSave: FC = () => {
  const router = useRouter()

  return (
    <PayloadLivePreview
      refresh={() => router.refresh()}
      serverURL={env.NEXT_PUBLIC_PAYLOAD_URL}
    />
  )
}
