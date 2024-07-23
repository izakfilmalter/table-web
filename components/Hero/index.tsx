import React from 'react'
import { HighImpactHero } from '@/heros/HighImpact'
import { LowImpactHero } from '@/heros/LowImpact'
import { MediumImpactHero } from '@/heros/MediumImpact'
import type { Page } from 'payload-types'

const heroes = {
  highImpact: HighImpactHero,
  lowImpact: LowImpactHero,
  mediumImpact: MediumImpactHero,
}

export const Hero: React.FC<Page['hero']> = (props) => {
  const { type } = props

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}
