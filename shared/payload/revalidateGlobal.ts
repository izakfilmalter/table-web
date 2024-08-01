import { revalidateTag } from 'next/cache'
import type { GlobalAfterChangeHook } from 'payload'

export const revalidateGlobal =
  (tag: string): GlobalAfterChangeHook =>
  ({ doc, req: { payload } }) => {
    payload.logger.info(`Revalidating ${tag}`)

    revalidateTag(`global_${tag}`)

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return doc
  }
