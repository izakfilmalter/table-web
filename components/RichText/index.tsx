import React from 'react'
import { serializeLexical } from '@/components/RichText/serialize'
import { cn } from '@/utilities/cn'

type Props = {
  className?: string
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
      {content &&
        !Array.isArray(content) &&
        typeof content === 'object' &&
        'root' in content &&
        serializeLexical({ nodes: content.root?.children })}
    </div>
  )
}

export default RichText
