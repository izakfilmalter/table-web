'use client'

import React from 'react'
import { CMSLink } from '@/components/Link'
import type { Header as HeaderType } from 'payload-types'

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header.navItems ?? []

  return (
    <nav className={'flex items-center gap-3'}>
      {navItems.map(({ link }, i) => (
        <CMSLink key={i} {...link} appearance={'link'} />
      ))}
    </nav>
  )
}
