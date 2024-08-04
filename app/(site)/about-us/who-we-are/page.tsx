import {
  boldText,
  containerClassName,
  italicTitle,
} from '@/components/globalStyles'
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
            'mx-auto my-16 flex max-w-[732px] flex-col items-start gap-6 px-8 md:gap-16'
          }
        >
          <h1 className={italicTitle}>Who We Are</h1>

          <RichText content={vision.content} className={boldText} />
        </div>
      </div>
    </div>
  )
}
