import { CalendarCard } from '@/components/cards/calendarCard'
import { HeroCard } from '@/components/cards/heroCard'
import { MapCard } from '@/components/cards/mapCard'
import { VisionCard } from '@/components/cards/visionCard'
import { WhoWeAreCard } from '@/components/cards/whoWeAreCard'

export default function Home() {
  return (
    <div className={'flex flex-col gap-4 px-4 pb-4'}>
      <HeroCard />
      <CalendarCard />
      <MapCard />
      <div className={'flex flex-col gap-4 md:flex-row'}>
        <VisionCard />
        <WhoWeAreCard />
      </div>
    </div>
  )
}
