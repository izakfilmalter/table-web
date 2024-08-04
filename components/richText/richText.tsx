import type { FC } from 'react'
import { Option, pipe } from 'effect'

import type { NodeTypes } from '@/components/richText/serialize'
import { serializeLexical } from '@/components/richText/serialize'
import { cn } from '@/lib/utils'

type Props = {
  className?: string
  content?: Record<string, unknown> | null
  enableGutter?: boolean
  enableProse?: boolean
}

export const RichText: FC<Props> = ({
  className,
  content,
  enableGutter = false,
  enableProse = true,
}) =>
  pipe(
    content,
    Option.fromNullable,
    Option.map((x) => (
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
        {!Array.isArray(x) &&
          typeof x === 'object' &&
          'root' in x &&
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          serializeLexical({ nodes: x.root?.children as Array<NodeTypes> })}
      </div>
    )),
    Option.getOrNull,
  )
