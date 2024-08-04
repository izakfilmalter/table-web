import type { FC } from 'react'
import { cardGradientDark, containerClassName } from '@/components/container'
import { cn } from '@/lib/utils'

export default function OurStory() {
  return (
    <div className={'w-screen'}>
      <div className={containerClassName}>
        <div className={'flex flex-col md:flex-row'}>
          <div
            className={
              'animate-fade-in md:flex-2 flex h-[600px] translate-y-[-10px] flex-col rounded-t-2xl bg-[url(/family.webp)] bg-cover bg-center opacity-0 md:rounded-b-2xl'
            }
          >
            <PastorText
              className={
                'animate-fade-in hidden translate-y-[-10px] opacity-0 delay-100 md:flex'
              }
            />
          </div>
          <div
            className={cn(
              cardGradientDark,
              'animate-fade-in translate-y-[-10px] p-8 text-2xl font-bold text-white opacity-0 md:-ml-40 md:mt-40 md:flex-1 md:delay-300',
            )}
          >
            <PastorText className={'mx-0 mb-4 md:hidden'} />
            In 2016 we moved to Boston, MA to help plant a church. We felt the
            call of the Lord on our lives to go, and we went. Little did we know
            that the Lord would one day send us not to help, but to lead.
            <br />
            <br />
            In the summer of 2022, Izak visited St Pete for work. The Lord
            started to move on his heart for this city. Walking to Craft Kafe in
            downtown, the presence of the Holy Spirit arrested him. It was
            unshakable.
            <br />
            <br />
            Our hunger for revival grew. The longing for the Lord to move. We
            saw a city broken by sin, consumed by the world. A city like
            Niniveh. A great city ready for revival to turn it upside down.
            <br />
            <br />
            With pain in our hearts, we left our church family, our home, our
            friends. We parachuted in the fall of 2023. Knowing fee, filled with
            hunger for the lost. We set out on our mission, to see St Pete
            saved, to see revival sweep the world.
          </div>
        </div>
      </div>
    </div>
  )
}

type PastorTextProps = {
  className?: string
}

const PastorText: FC<PastorTextProps> = (props) => {
  const { className } = props

  return (
    <div
      className={cn(
        'relative mx-4 flex flex-col font-serif italic text-black md:bottom-[calc(-100%-32px)] md:mx-8',
        className,
      )}
    >
      <h1 className={'text-6xl leading-tight md:text-8xl md:leading-tight'}>
        Ps. Izak & Amy
        <br />
        Filmalter
      </h1>
    </div>
  )
}
