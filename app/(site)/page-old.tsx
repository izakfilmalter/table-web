// import { Logo } from '@/components/logo'
// import { RefreshRouteOnSave } from '@/components/refreshRouteOnSave'
// import { RichText } from '@/components/richText/richText'
// import type { Vision } from '@/payload-types'
// import { getCachedGlobal } from '@/shared/payload/getGlobals'
//
// export default async function Home() {
//   const vision: Vision = await getCachedGlobal('vision', 1)()
//
//   return (
//     <>
//       <div
//         className={
//           'mx-auto my-16 flex max-w-[732px] flex-col items-start gap-16 px-8'
//         }
//       >
//         <Logo className={'h-auto w-full md:h-32 md:w-auto'} />
//
//         <RichText content={vision.content} className={'text-4xl font-bold'} />
//       </div>
//       <RefreshRouteOnSave />
//     </>
//   )
// }
