'use client'

import type { FC, MouseEventHandler } from 'react'
import { Fragment, useCallback, useState } from 'react'
import { toast } from '@payloadcms/ui'

const SuccessMessage: FC = () => (
  <div>
    Database seeded! You can now{' '}
    <a target={'_blank'} href={'/'}>
      visit your website
    </a>
  </div>
)

export const SeedButton: FC = () => {
  const [loading, setLoading] = useState(false)
  const [seeded, setSeeded] = useState(false)
  const [error, setError] = useState(null)

  const handleClick = useCallback<MouseEventHandler<HTMLAnchorElement>>(
    async (e) => {
      e.preventDefault()
      if (loading || seeded) return

      setLoading(true)

      try {
        await fetch('/api/seed')
        setSeeded(true)
        toast.success(<SuccessMessage />, { duration: 5000 })
      } catch (err) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setError(err)
      }
    },
    [loading, seeded],
  )

  let message = ''
  if (loading) message = ' (seeding...)'
  if (seeded) message = ' (done!)'
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition,@typescript-eslint/restrict-template-expressions
  if (error) message = ` (error: ${error})`

  return (
    <Fragment>
      <a
        href={'/api/seed'}
        onClick={handleClick}
        rel={'noopener noreferrer'}
        target={'_blank'}
      >
        Seed your database
      </a>
      {message}
    </Fragment>
  )
}
