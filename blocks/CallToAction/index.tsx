import type { FC } from 'react'
import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import type { Page } from 'payload-types'

type Props = Extract<Page['layout'][0], { blockType: 'cta' }>

export const CallToActionBlock: FC<
  Props & {
    id?: string
  }
> = ({ links, richText }) => (
  <div className={'container'}>
    <div
      className={
        'flex flex-col gap-8 rounded border border-border bg-card p-4 md:flex-row md:items-center md:justify-between'
      }
    >
      <div className={'flex max-w-[48rem] items-center'}>
        <RichText className={''} content={richText} enableGutter={false} />
      </div>
      <div className={'flex flex-col gap-8'}>
        {(links || []).map(({ link }, i) => (
          <CMSLink key={i} size={'lg'} {...link} />
        ))}
      </div>
    </div>
  </div>
)
