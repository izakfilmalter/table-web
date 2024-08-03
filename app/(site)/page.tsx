import { RichText } from '@/components/richText/richText'
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
          <div
            className={
              'my-auto bg-gradient-to-b from-[hsla(227,56%,49%,30%)] to-[hsla(4,83%,24%,80%)] p-16 text-white backdrop-blur-[12px]'
            }
          >
            <h1 className={'font-serif text-7xl'}>
              Discipleship
              <br />
              At Scale
            </h1>
            <h2 className={cn(contentClassName, 'mt-0')}>
              Equip your team with an app for data driven discipleship.
              <br />
              <span className={'hidden md:inline-block'}>
                Streamlining Next Steps, growing leaders, and more.
              </span>
            </h2>
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
