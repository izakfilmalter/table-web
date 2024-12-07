export default function Home() {
  return (
    <div className={'m-auto flex flex-col items-start gap-16 px-4 text-left'}>
      <h1
        className={
          'text-[min(calc((100vw-32px)/5.2),96px)] font-black leading-[.85]'
        }
      >
        REVIVE 25
      </h1>

      <h2
        className={
          'text-[min(calc((100vw-32px)/6.3),53px)] font-black leading-[1]'
        }
      >
        Prayer & Worship
      </h2>

      <h2
        className={
          'text-[min(calc((100vw-32px)/7.1),54px)] font-black leading-[1]'
        }
      >
        Signs & Wonders
      </h2>

      <h2
        className={
          'text-[min(calc((100vw-32px)/7.3),59.5px)] font-black leading-[1]'
        }
      >
        Dec 27th - 29th
      </h2>
    </div>
  )
}
