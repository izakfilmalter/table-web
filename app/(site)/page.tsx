import { ChevronRight } from 'lucide-react'

import { cardGradient } from '@/components/container'
import { Map } from '@/components/map'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const contentClassName =
  'w-full max-w-[780px] text-[22px] md:text-3xl font-bold'

export default function Home() {
  return (
    <div className={'flex flex-col gap-4 pb-4'}>
      <div
        className={
          'relative mx-4 flex h-[calc(100dvh-72px-32px)] max-h-[1024px] translate-y-[-10px] animate-fade-in flex-col overflow-hidden rounded-2xl bg-white bg-[url(/st-pete.webp)] bg-cover opacity-0 md:min-h-[658px]'
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
                'font-serif text-[min(calc((100vw-64px)/6.59),72px)] italic leading-tight'
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
              Find a place to grow,
              <br />a place to pray, a place to thrive.
            </h2>
            <Button
              variant={'secondary'}
              size={'lg'}
              asChild
              className={'gap-1'}
            >
              <a
                href={
                  'https://table-church.churchcenter.com/people/forms/789148'
                }
                data-open-in-church-center-modal={'true'}
              >
                Get Connected
                <ChevronRight />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div
        className={
          'relative mx-4 flex h-[512px] translate-y-[-10px] animate-fade-in flex-col overflow-hidden rounded-2xl bg-gray-200 opacity-0 delay-200'
        }
      >
        <Map />

        <h1
          className={
            'relative mx-6 mb-2 mt-auto text-[min(calc((100vw-80px)/3.27),96px)] font-bold leading-none'
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
    </div>
  )
}
