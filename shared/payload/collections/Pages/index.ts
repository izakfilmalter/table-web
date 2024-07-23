import { env } from '@/env.mjs'
import { authenticated } from '@/shared/payload/access/authenticated'
import { authenticatedOrPublished } from '@/shared/payload/access/authenticatedOrPublished'
import { Archive } from '@/shared/payload/blocks/ArchiveBlock'
import { CallToAction } from '@/shared/payload/blocks/CallToAction'
import { Content } from '@/shared/payload/blocks/Content'
import { FormBlock } from '@/shared/payload/blocks/Form'
import { MediaBlock } from '@/shared/payload/blocks/MediaBlock'
import { revalidatePage } from '@/shared/payload/collections/Pages/hooks/revalidatePage'
import { hero } from '@/shared/payload/fields/hero'
import { slugField } from '@/shared/payload/fields/slug'
import { populatePublishedAt } from '@/shared/payload/hooks/populatePublishedAt'
import { generatePreviewPath } from '@/shared/payload/utilities/generatePreviewPath'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data }) => {
        const path = generatePreviewPath({
          path: `/${typeof data.slug === 'string' ? data.slug : ''}`,
        })
        return `${env.NEXT_PUBLIC_PAYLOAD_URL}${path}`
      },
    },
    preview: (doc) =>
      generatePreviewPath({
        path: `/${typeof doc.slug === 'string' ? doc.slug : ''}`,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [hero],
          label: 'Hero',
        },
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [CallToAction, Content, MediaBlock, Archive, FormBlock],
              required: true,
            },
          ],
          label: 'Content',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
    },
    maxPerDoc: 50,
  },
}
