import type { FC } from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'

import { buttonRightIcon, italicTitle } from '@/components/globalStyles'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const OurStoryCard: FC = () => (
  <div className={'flex flex-1 flex-col rounded-2xl bg-black md:flex-row'}>
    <div className={'order-1 flex flex-col items-start p-8 md:order-[initial]'}>
      <h1
        className={cn(italicTitle, 'mt-auto text-white md:whitespace-nowrap')}
      >
        Ps. Izak <br className={'hidden md:block'} />& Amy
      </h1>

      <Button variant={'secondary'} size={'lg'} asChild className={''}>
        <Link href={'/about-us/our-story'}>
          Read our story
          <ArrowRightIcon className={buttonRightIcon} />
        </Link>
      </Button>
    </div>
    <div
      className={
        'm-2 min-h-[400px] flex-1 rounded-lg bg-[url(/family.webp)] bg-cover bg-[center_30%] md:min-h-[500px]'
      }
    />
  </div>
)
