/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
import configPromise from '@payload-config'

import '@payloadcms/next/css'

/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import type { ReactNode } from 'react'
import { RootLayout } from '@payloadcms/next/layouts'

import './custom.scss'

type Args = {
  children: ReactNode
}

const Layout = ({ children }: Args) => (
  <RootLayout config={configPromise}>{children}</RootLayout>
)

export default Layout
