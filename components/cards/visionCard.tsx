import type { FC } from 'react'
import { ArrowUpIcon } from 'lucide-react'

import { boldText, italicTitle } from '@/components/globalStyles'
import { cn } from '@/lib/utils'

export const VisionCard: FC = () => (
  <div
    className={
      'flex flex-1 flex-col items-start rounded-2xl bg-[#519AFA80] p-8'
    }
  >
    <div className={'flex flex-col items-baseline gap-8 md:flex-row'}>
      <ArrowUpIcon className={'-mb-4 size-20 md:mb-0'} />

      <h1 className={cn(italicTitle, 'mb-2')}>Big vision</h1>
    </div>

    <p className={boldText}>
      Jesus has called us to see revival in every nation, tribe, people, and
      tongue. Starting in St Pete, the next harvest will begin. This move will
      be known for walking with the Spirit, advancing the gospel, and the
      demonstration of signs and wonders.
    </p>
  </div>
)
