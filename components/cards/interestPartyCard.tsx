import type { FC } from 'react'
import { ArrowRightIcon } from 'lucide-react'

import { buttonRightIcon } from '@/components/globalStyles'
import { Button } from '@/components/ui/button'

export const InterestPartyCard: FC = () => (
  <a
    href={'https://table-church.churchcenter.com/people/forms/789467'}
    data-open-in-church-center-modal={'true'}
    className={
      'flex flex-1 flex-col items-start justify-between gap-2 rounded-t-2xl bg-red-200 px-8 py-4 transition-all hover:bg-red-300 active:bg-red-200 md:flex-row md:items-center md:gap-4'
    }
  >
    <div className={'flex w-full flex-row justify-between md:w-auto'}>
      <h1 className={'font-serif text-2xl font-medium italic md:text-3xl'}>
        Interest Party
      </h1>
      <Button variant={'default'} size={'sm'} className={'md:hidden'}>
        I'll Be There
        <ArrowRightIcon className={'ml-1 size-5'} />
      </Button>
    </div>

    <p className={'text-xl font-bold text-black md:text-2xl'}>
      Break bread. Hear the vision. Find your seat. Thursday Aug 8th @ 6pm
    </p>

    <Button variant={'default'} size={'lg'} className={'hidden md:flex'}>
      I'll Be There
      <ArrowRightIcon className={buttonRightIcon} />
    </Button>
  </a>
)
