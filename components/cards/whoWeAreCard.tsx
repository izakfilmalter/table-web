import type { FC } from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'

import {
  boldText,
  buttonRightIcon,
  italicTitle,
} from '@/components/globalStyles'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export const WhoWeAreCard: FC = () => (
  <div
    className={'flex flex-1 flex-col items-start rounded-2xl bg-secondary p-8'}
  >
    <h1 className={cn(italicTitle, 'mb-2')}>Who We Are</h1>

    <p className={cn(boldText, 'mb-8')}>
      Welcome to the next iteration of church. A church centered around the
      Lord’s Table, Christ and Christ crucified. A church whose mission is the
      Great Commission.
    </p>

    <Button variant={'default'} size={'lg'} asChild className={'mt-auto'}>
      <Link href={'/about-us/who-we-are'}>
        Read our manifesto
        <ArrowRightIcon className={buttonRightIcon} />
      </Link>
    </Button>
  </div>
)
