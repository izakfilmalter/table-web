import { CalendarCard } from '@/components/cards/calendarCard'
import { HeroCard } from '@/components/cards/heroCard'
import { MapCard } from '@/components/cards/mapCard'

export default function Home() {
  return (
    <div className={'flex flex-col gap-4 px-4 pb-4'}>
      <HeroCard />
      <MapCard />
      <CalendarCard />
    </div>
  )
}
