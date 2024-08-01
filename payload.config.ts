import { env } from '@/env.mjs'
import { revalidateGlobal } from '@/shared/payload/revalidateGlobal'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import sharp from 'sharp'

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),

  globals: [
    {
      slug: 'vision',
      fields: [
        {
          name: 'content',
          type: 'richText',
        },
      ],
      // versions: {
      //   drafts: {
      //     autosave: true,
      //   },
      // },
      access: {
        read: () => true,
      },
      hooks: {
        afterChange: [revalidateGlobal('vision')],
      },
    },
  ],

  // Define and configure your collections in this array
  collections: [],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: env.PAYLOAD_SECRET,
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: postgresAdapter({
    // Postgres-specific arguments go here.
    // `pool` is required.
    pool: {
      connectionString: env.DATABASE_URL,
    },
  }),
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,

  admin: {
    livePreview: {
      url: 'http://localhost:3000',
      globals: ['vision'],
    },
  },
})
