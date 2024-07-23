import type { LinkAppearances } from '@/shared/payload/fields/link'
import { link } from '@/shared/payload/fields/link'
import deepMerge from '@/shared/payload/utilities/deepMerge'
import type { ArrayField, Field } from 'payload'

type LinkGroupType = (options?: {
  appearances?: Array<LinkAppearances> | false
  overrides?: Partial<ArrayField>
}) => Field

export const linkGroup: LinkGroupType = ({
  appearances,
  overrides = {},
} = {}) => {
  const generatedLinkGroup: Field = {
    name: 'links',
    type: 'array',
    fields: [
      link({
        appearances,
      }),
    ],
  }

  return deepMerge(generatedLinkGroup, overrides)
}
