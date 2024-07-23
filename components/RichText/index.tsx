import React from 'react'
import { serializeLexical } from '@/components/RichText/serialize'
import { cn } from '@/utilities/cn'

type Props = {
  className?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content?: Record<string, any> | null
  enableGutter?: boolean
  enableProse?: boolean
}

const RichText: React.FC<Props> = ({
  className,
  content,
  enableGutter = true,
  enableProse = true,
}) => {
  if (!content) {
    return null
  }

  return (
    <div
      className={cn(
        {
          container: enableGutter,
          'max-w-none': !enableGutter,
          'prose dark:prose-invert mx-auto': enableProse,
        },
        className,
      )}
    >
      {/* eslint-disable-next-line @typescript-eslint/no-unnecessary-condition */}
      {content &&
        !Array.isArray(content) &&
        typeof content === 'object' &&
        'root' in content &&
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
        serializeLexical({ nodes: content.root?.children })}
    </div>
  )
}

export default RichText
