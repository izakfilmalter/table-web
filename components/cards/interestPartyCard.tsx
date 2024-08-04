import type { FC } from 'react'
import { ArrowRightIcon } from 'lucide-react'

import { buttonRightIcon } from '@/components/globalStyles'
import { Button } from '@/components/ui/button'

export const InterestPartyCard: FC = () => (
  <div
    className={
      '-mb-4 flex flex-1 flex-col items-start justify-between gap-2 rounded-t-2xl bg-red-300 px-8 py-4 md:flex-row md:items-center md:gap-4'
    }
  >
    <h1 className={'font-serif text-4xl font-medium italic md:text-3xl'}>
      Interest Party
    </h1>

    <p className={'text-xl font-bold text-black md:text-2xl'}>
      Break bread. Hear the vision. Find your seat. Thursday Aug 8th @ 6pm
    </p>

    <Button variant={'default'} size={'lg'} asChild>
      <a
        href={'https://table-church.churchcenter.com/people/forms/789467'}
        data-open-in-church-center-modal={'true'}
      >
        I'll Be There
        <ArrowRightIcon className={buttonRightIcon} />
      </a>
    </Button>
  </div>
)
