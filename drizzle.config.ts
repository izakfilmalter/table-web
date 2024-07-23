import { env } from '@/env.mjs'
import type { Config } from 'drizzle-kit'

export default {
  schema: './src/server/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ['test_*'],
} satisfies Config
