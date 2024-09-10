import type { FC, ReactNode } from 'react'
import {
  addDays,
  addMonths,
  differenceInCalendarDays,
  getDay,
  startOfMonth,
} from 'date-fns/fp'
import { Boolean, Option, pipe } from 'effect'
import { ArrowRightIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

// ChatGPT wrote this.
function isLessThan6DaysFromFirstSunday(): boolean {
  const today = new Date()

  // Calculate the difference in days
  const diffToFirstSundayCurrentMonth = pipe(
    today,
    startOfMonth,
    getFirstSunday,
    differenceInCalendarDays(today),
    Math.abs,
  )

  const diffToFirstSundayNextMonth = pipe(
    today,
    addMonths(1),
    startOfMonth,
    getFirstSunday,
    differenceInCalendarDays(today),
    Math.abs,
  )

  // Return true if either difference is less than 7 days
  return diffToFirstSundayCurrentMonth < 7 || diffToFirstSundayNextMonth < 7
}

// Helper function to get the first Sunday of a given date
const getFirstSunday = (x: Date): Date => {
  return pipe(x, addDays(pipe(getDay(x), (y) => (7 - y) % 7)))
}

export const CalendarCard: FC = () => (
  <div
    className={
      'flex translate-y-[-10px] animate-fade-in flex-col gap-3 opacity-0 delay-200 md:flex-row'
    }
  >
    <Day day={'Sunday'}>
      {pipe(
        isLessThan6DaysFromFirstSunday(),
        Boolean.match({
          onFalse: () => null,
          onTrue: () => (
            <Event
              Name={'Pack the Pier'}
              Description={
                'Join the Church of Tampa Bay at Pack the Pier. A time for public worship, drawing close to the Lord, healing, and restoration.'
              }
              Time={'6:30 PM - 8:00 PM'}
              href={'https://table-church.churchcenter.com/people/forms/803638'}
              className={'bg-rose-200 hover:bg-rose-300 active:bg-rose-200'}
            />
          ),
        }),
      )}
    </Day>
    <Day day={'Monday'} Tag={'Fasting'}>
      <Event
        Name={'Prayer'}
        Description={
          'A time for prayer for the harvest in St Pete. Interceding fo the Lord to heal our land.'
        }
        Time={'6:30 PM - 8:00 PM'}
        href={'https://table-church.churchcenter.com/people/forms/789394'}
        className={'bg-teal-200 hover:bg-teal-300 active:bg-teal-200'}
      />
    </Day>
    <Day day={'Tuesday'} />
    <Day day={'Wednesday'} />
    <Day day={'Thursday'}>
      <Event
        Name={'Service'}
        Description={
          'A time for breaking bread, worshiping, sharing the word, growing in unity.'
        }
        Time={'7:00 PM - 9:30 PM'}
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
  Tag?: ReactNode
  children?: ReactNode
}

const Day: FC<DayProps> = (props) => {
  const { day, children, Tag } = props
  const active = pipe(children, Option.fromNullable, Option.isSome)

  return (
    <div
      className={cn(
        'flex-col gap-2 rounded-xl bg-secondary',
        pipe(
          active,
          Boolean.match({
            onFalse: () => 'hidden md:[writing-mode:vertical-lr] lg:flex',
            onTrue: () => 'flex flex-1',
          }),
        ),
      )}
    >
      <div
        className={'mx-4 mt-4 flex flex-row items-center justify-between gap-2'}
      >
        <p
          className={cn(
            'font-serif text-2xl italic',
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

        {pipe(
          Tag,
          Option.fromNullable,
          Option.map((x) => <Badge className={'mb-1.5'}>{x}</Badge>),
          Option.getOrNull,
        )}
      </div>

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
        'flex flex-1 cursor-pointer select-none flex-col rounded-[inherit] bg-gray-200 transition-all',
        className,
      )}
      data-open-in-church-center-modal={'true'}
    >
      <div className={'flex flex-1 flex-col rounded-xl p-6'}>
        <p className={'mb-1 text-xl font-bold'}>{Name}</p>

        <p className={'text-md mb-6'}>{Description}</p>

        <div className={'mt-auto flex flex-row items-end justify-between'}>
          <p className={'text-lg font-normal'}>{Time}</p>
          <ArrowRightIcon className={'mb-[3px] flex-shrink-0'} />
        </div>
      </div>
    </a>
  )
}
