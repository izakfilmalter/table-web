import { containerClassName } from '@/components/container'
import { RichText } from '@/components/richText/richText'
import type { Vision } from '@/payload-types'
import { getCachedGlobal } from '@/shared/payload/getGlobals'

export default async function WhoWeAre() {
  const vision: Vision = await getCachedGlobal('vision', 1)()

  return (
    <div className={'w-screen'}>
      <div className={containerClassName}>
        <div
          className={
            'mx-auto my-16 flex max-w-[732px] flex-col items-start gap-16 px-8'
          }
        >
          <RichText content={vision.content} className={'text-4xl font-bold'} />
        </div>
      </div>
    </div>
  )
}
