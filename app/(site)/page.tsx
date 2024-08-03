import { RichText } from '@/components/richText/richText'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { Vision } from '@/payload-types'
import { getCachedGlobal } from '@/shared/payload/getGlobals'
import { ChevronRight } from 'lucide-react'

const contentClassName =
  'w-full max-w-[780px] text-[22px] md:text-3xl font-bold'

export default async function Home() {
  const vision: Vision = await getCachedGlobal('vision', 1)()

  return (
    <>
      <div
        className={
          'relative m-4 flex h-[calc(100dvh-72px-32px)] max-h-[1024px] translate-y-[-10px] animate-fade-in flex-col overflow-hidden rounded-2xl bg-white bg-[url(/st-pete.webp)] bg-cover opacity-0 md:min-h-[658px]'
        }
      >
        <div
          className={
            'm-auto flex h-full w-full max-w-[1200px] flex-col items-start md:px-[32px] md:py-4'
          }
        >
          <div
            className={
              'ml-0 mr-auto mt-auto flex w-full flex-col gap-6 bg-gradient-to-b from-[hsla(227,56%,49%,30%)] to-[hsla(4,83%,24%,80%)] p-4 text-white backdrop-blur-[12px] md:mb-auto md:w-auto md:p-16'
            }
          >
            <h1
              className={
                'font-serif text-[min(calc((100vw-96px)/6),72px)] leading-tight'
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
          'mx-auto my-16 flex max-w-[732px] flex-col items-start gap-16 px-8'
        }
      >
        <RichText content={vision.content} className={'text-4xl font-bold'} />
      </div>
    </>
  )
}
