import type { FC } from 'react'
import { ArrowRightIcon } from 'lucide-react'

import { ServiceBanner } from '@/components/cards/serviceBanner'
import { buttonRightIcon, cardGradient } from '@/components/globalStyles'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const contentClassName =
  'w-full max-w-[780px] text-[22px] md:text-3xl font-bold'

export const HeroCard: FC = () => (
  <div
    className={'flex translate-y-[-10px] animate-fade-in flex-col opacity-0'}
  >
    <ServiceBanner />
    <div
      className={
        'relative flex h-[calc(100dvh-168px)] max-h-[1024px] min-h-[740px] flex-col overflow-hidden rounded-b-2xl bg-white bg-[url(/st-pete.webp)] bg-cover md:min-h-[658px]'
      }
    >
      <div
        className={
          'm-auto flex h-full w-full max-w-[1200px] flex-col md:px-[32px] md:py-4'
        }
      >
        <div
          className={cn(
            cardGradient,
            'ml-0 mr-auto mt-auto flex w-full flex-col items-start gap-6 p-4 text-white md:mb-auto md:w-auto md:p-16',
          )}
        >
          <h1
            className={
              'font-serif text-[min(calc((100vw-64px)/6.9),72px)] italic leading-tight'
            }
          >
            Real community
            <br />
            Real discipleship
            <br />
            Real revival
          </h1>
          <h2 className={cn(contentClassName)}>
            We'd love to connect with you!
            <br />
            Find a place to grow, a place
            <br /> to pray, a place to thrive.
          </h2>
          <Button variant={'secondary'} size={'lg'} asChild>
            <a
              href={'https://table-church.churchcenter.com/people/forms/789148'}
              data-open-in-church-center-modal={'true'}
            >
              Get Connected
              <ArrowRightIcon className={buttonRightIcon} />
            </a>
          </Button>
        </div>
      </div>
    </div>
  </div>
)
