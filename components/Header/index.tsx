import React from 'react'
import { HeaderClient } from '@/components/Header/index.client'
import { getCachedGlobal } from '@/utilities/getGlobals'

import type { Header } from '../../../payload-types'

export async function Header() {
  const header: Header = await getCachedGlobal('header', 1)()

  return <HeaderClient header={header} />
}
