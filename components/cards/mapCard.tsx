import type { FC } from 'react'

import { StPeteMap } from '@/components/stPeteMap'

export const MapCard: FC = () => (
  <div
    className={
      'delay-400 relative flex h-[512px] translate-y-[-10px] animate-fade-in flex-col overflow-hidden rounded-2xl bg-gray-200 opacity-0'
    }
  >
    <div
      className={
        'pointer-events-none absolute left-0 right-0 top-0 h-[calc(100%+32px)]'
      }
    >
      <StPeteMap />
    </div>

    <h1
      className={
        'relative mx-8 mb-4 mt-auto text-[min(calc((100vw-96px)/3.27),96px)] font-bold leading-none'
      }
    >
      <span className={'text-black/10'}>
        Paris
        <br />
        London
        <br />
        Tokyo
      </span>
      <br />
      St Pete
    </h1>
  </div>
)
