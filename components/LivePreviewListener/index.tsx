'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { env } from '@/env.mjs'
import { RefreshRouteOnSave as PayloadLivePreview } from '@payloadcms/live-preview-react'

export const LivePreviewListener: React.FC = () => {
  const router = useRouter()
  return (
    <PayloadLivePreview
      // eslint-disable-next-line @typescript-eslint/unbound-method
      refresh={router.refresh}
      serverURL={env.NEXT_PUBLIC_PAYLOAD_URL}
    />
  )
}
