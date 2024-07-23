import React from 'react'
import Link from 'next/link'
import { getCachedGlobal } from '@/utilities/getGlobals'

import type { Footer } from '../../../payload-types'
import { ThemeSelector } from '../../providers/Theme/ThemeSelector'
import { CMSLink } from '../Link'

export async function Footer() {
  const footer: Footer = await getCachedGlobal('footer')()

  const navItems = footer.navItems || []

  return (
    <footer
      className={'border-t border-border bg-black text-white dark:bg-card'}
    >
      <div
        className={
          'container flex flex-col gap-8 py-8 md:flex-row md:justify-between'
        }
      >
        <Link className={'flex items-center'} href={'/'}>
          <picture>
            <img
              alt={'Payload Logo'}
              className={'max-w-[6rem] invert-0'}
              src={
                'https://raw.githubusercontent.com/payloadcms/payload/main/packages/payload/src/admin/assets/images/payload-logo-light.svg'
              }
            />
          </picture>
        </Link>

        <div
          className={
            'flex flex-col-reverse items-start gap-4 md:flex-row md:items-center'
          }
        >
          <ThemeSelector />
          <nav className={'flex flex-col gap-4 md:flex-row'}>
            {navItems.map(({ link }, i) => (
              <CMSLink className={'text-white'} key={i} {...link} />
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
