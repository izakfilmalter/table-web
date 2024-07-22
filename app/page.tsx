import { Logo } from '@/components/logo'

export default function Home() {
  return (
    <div
      className={
        'mx-auto my-16 flex max-w-[732px] flex-col items-start gap-16 px-8'
      }
    >
      <Logo className={'h-auto w-full md:h-32 md:w-auto'} />

      <p className={'text-4xl'}>
        Welcome to the next iteration of church. A church centered around the
        Lord’s Table, Christ and Christ crucified. A church whose mission is the
        Great Commission.
        <br />
        <br />
        Say hello to the church that gathers in the home. A place for the lost
        to finally find home. Where a family of believers care for one another
        in the home. A city covered in Tables.
        <br />
        <br />
        Welcome to Tribe; a large gathering from every Table across the city.
        Brought together for worship, prayer for the harvest, and meeting for
        revival. A place that equips believers for the great commission, and
        sends them into the harvest.
        <br />
        <br />
        The next iteration of church is the same as the first iteration of
        church. We read the Book of Acts, we do the Book of Acts. It’s not just
        history, it’s the model for His bride.
        <br />
        <br />
        Come take a seat at the Table. Break bread with your Savior. Be marked
        by His blood. Be driven by love for the lost. It’s time for Revival.
        Let’s hasten the return of our Lord, Jesus.
        <br />
        <br />
        Say hello to your Table.
      </p>
    </div>
  )
}
