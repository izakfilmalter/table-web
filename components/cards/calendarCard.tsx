import type { FC, ReactNode } from 'react'
import { Boolean, Option, pipe } from 'effect'
import { ArrowRightIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

export const CalendarCard: FC = () => (
  <div
    className={
      'flex translate-y-[-10px] animate-fade-in flex-col gap-2 opacity-0 delay-200 md:flex-row'
    }
  >
    <Day day={'Sunday'} />
    <Day day={'Monday'} />
    <Day day={'Tuesday'}>
      <Event
        Name={'Prayer'}
        Description={
          'A time for prayer for the harvest in St Pete. Interceding fo the Lord to heal our land.'
        }
        Time={'7:30 PM - 8:30 PM'}
        href={'https://table-church.churchcenter.com/people/forms/789394'}
        className={'bg-teal-200 hover:bg-teal-300 active:bg-teal-200'}
      />
    </Day>
    <Day day={'Wednesday'} />
    <Day day={'Thursday'}>
      <Event
        Name={'Service'}
        Description={
          'A time for breaking bread, worshiping, sharing the word, growing in unity.'
        }
        Time={'6:00 PM - 9:00 PM'}
        href={'https://table-church.churchcenter.com/people/forms/789395'}
        className={'bg-indigo-200 hover:bg-indigo-300 active:bg-indigo-200'}
      />
    </Day>
    <Day day={'Friday'} />
    <Day day={'Saturday'}>
      <Event
        Name={'Outreach'}
        Description={
          'A time go see the sick healed, the lost saved, and to make disciples.'
        }
        Time={'9:30 AM - 12:00 PM'}
        href={'https://table-church.churchcenter.com/people/forms/789396'}
        className={'bg-amber-200 hover:bg-amber-300 active:bg-amber-200'}
      />
    </Day>
  </div>
)

type DayProps = {
  day: string
  children?: ReactNode
}

const Day: FC<DayProps> = (props) => {
  const { day, children } = props
  const active = pipe(children, Option.fromNullable, Option.isSome)

  return (
    <div
      className={cn(
        'flex-col gap-2 rounded-xl bg-secondary/50',
        pipe(
          active,
          Boolean.match({
            onFalse: () => 'hidden md:flex md:[writing-mode:vertical-lr]',
            onTrue: () => 'flex flex-1',
          }),
        ),
      )}
    >
      <p
        className={cn(
          'mx-4 mt-4 font-serif text-2xl italic',
          pipe(
            active,
            Boolean.match({
              onFalse: () => 'text-muted-foreground',
              onTrue: () => '',
            }),
          ),
        )}
      >
        {day}
      </p>

      {children}
    </div>
  )
}

type EventProps = {
  Name: ReactNode
  Description: ReactNode
  Time: ReactNode
  href: string
  className?: string
}

const Event: FC<EventProps> = (props) => {
  const { Name, Time, Description, className, href } = props
  return (
    <a
      href={href}
      className={cn(
        'm-px flex flex-1 cursor-pointer select-none flex-row gap-2 rounded-b-[11px] rounded-t-xl bg-gray-200 p-2 transition-all',
        className,
      )}
      data-open-in-church-center-modal={'true'}
    >
      <div className={'flex flex-1 flex-col rounded-xl p-4'}>
        <p className={'mb-1 text-xl font-bold'}>{Name}</p>
        <p className={'text-md mb-6'}>{Description}</p>

        <div className={'mt-auto flex flex-row items-end justify-between'}>
          <p className={'text-lg'}>{Time}</p>
          <ArrowRightIcon className={'mb-[3px] flex-shrink-0'} />
        </div>
      </div>
    </a>
  )
}
