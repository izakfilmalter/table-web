import { RichText } from '@/components/richText/richText'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { Vision } from '@/payload-types'
import { getCachedGlobal } from '@/shared/payload/getGlobals'

const contentClassName =
  'mt-24 w-full max-w-[780px] text-[22px] md:text-3xl font-semibold leading-[1.4] md:leading-[1.5]'

export default async function Home() {
  const vision: Vision = await getCachedGlobal('vision', 1)()

  return (
    <>
      <div
        className={
          'animate-fade-in relative m-4 flex h-[calc(100dvh-72px-32px)] max-h-[1024px] translate-y-[-10px] flex-col overflow-hidden rounded-[32px] bg-white bg-[url(/st-pete.webp)] bg-cover opacity-0 md:min-h-[658px] md:rounded-[48px]'
        }
      >
        <div className={'m-auto flex h-full flex-col px-4 py-4'}>
          <h1
            className={
              // 96px is total pixels between each side of the screen and the start
              // of the text. This makes it so that the hero text is always edge to
              // edge on mobile.
              'animate-fade-in my-auto translate-y-[-10px] font-serif text-[min(calc((100vw-96px)/10),80px)] leading-[1.4] text-white opacity-0 delay-200 md:mb-0 md:leading-[1.7]'
            }
          >
            <span
              className={
                'rounded-3xl bg-black box-decoration-clone px-4 pb-1.5 pt-4 md:px-8 md:pb-3.5 md:pt-8'
              }
            >
              Discipleship
              <br />
              At Scale
            </span>
          </h1>

          <Card
            className={
              'delay-400 animate-fade-in translate-y-[-10px] items-start gap-4 !border-0 bg-white/70 p-4 opacity-0 backdrop-blur-[12px] md:mb-auto md:p-8'
            }
          >
            <h2 className={cn(contentClassName, 'mt-0')}>
              Equip your team with an app for data driven discipleship.
              <br />
              <span className={'hidden md:inline-block'}>
                Streamlining Next Steps, growing leaders, and more.
              </span>
            </h2>
          </Card>
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
