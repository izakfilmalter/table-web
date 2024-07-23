'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HeaderNav } from '@/components/Header/Nav'
import { Logo } from '@/components/logo'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import type { Theme } from '@/providers/Theme/types'
import type { Header } from 'payload-types'

interface HeaderClientProps {
  header: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ header }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<Theme | null | undefined>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header
      className={'container relative z-20 flex justify-between py-8'}
      {...(theme ? { 'data-theme': theme } : {})}
    >
      <Link href={'/'}>
        <Logo />
      </Link>
      <HeaderNav header={header} />
    </header>
  )
}
