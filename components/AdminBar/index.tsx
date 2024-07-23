'use client'

import type { FC } from 'react'
import { useCallback, useState } from 'react'
import { useSelectedLayoutSegments } from 'next/navigation'
import { env } from '@/env.mjs'
import { cn } from '@/utilities/cn'
import { Option, pipe } from 'effect'
import type { PayloadAdminBarProps, PayloadMeUser } from 'payload-admin-bar'
import { PayloadAdminBar } from 'payload-admin-bar'

const collectionLabels = {
  pages: {
    plural: 'Pages',
    singular: 'Page',
  },
  posts: {
    plural: 'Posts',
    singular: 'Post',
  },
  projects: {
    plural: 'Projects',
    singular: 'Project',
  },
}

const Title: FC = () => <span>Dashboard</span>

export const AdminBar: FC<{
  adminBarProps?: PayloadAdminBarProps
}> = (props = {}) => {
  const { adminBarProps = {} } = props
  const segments = useSelectedLayoutSegments()
  const [show, setShow] = useState(false)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const collection = collectionLabels[segments[1]] ? segments[1] : 'pages'

  const onAuthChange = useCallback((user: PayloadMeUser) => {
    setShow(pipe(user, Option.fromNullable, Option.isSome))
  }, [])

  return (
    <div
      className={cn('bg-black py-2 text-white', {
        block: show,
        hidden: !show,
      })}
    >
      <div className={'container'}>
        <PayloadAdminBar
          {...adminBarProps}
          className={'py-2 text-white'}
          classNames={{
            controls: 'font-medium text-white',
            logo: 'text-white',
            user: 'text-white',
          }}
          cmsURL={env.NEXT_PUBLIC_PAYLOAD_URL}
          collection={collection}
          collectionLabels={{
            /*eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/ban-ts-comment */
            // @ts-ignore
            plural: collectionLabels[collection]?.plural || 'Pages',
            // @ts-ignore
            singular: collectionLabels[collection]?.singular || 'Page',
            /* eslint-enable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/ban-ts-comment */
          }}
          logo={<Title />}
          onAuthChange={onAuthChange}
          style={{
            backgroundColor: 'transparent',
            padding: 0,
            position: 'relative',
            zIndex: 'unset',
          }}
        />
      </div>
    </div>
  )
}
