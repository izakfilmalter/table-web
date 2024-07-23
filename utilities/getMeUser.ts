import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { env } from '@/env.mjs'
import type { User } from 'payload-types'

export const getMeUser = async (args?: {
  nullUserRedirect?: string
  validUserRedirect?: string
}): Promise<{
  token?: string
  user: User
}> => {
  const { nullUserRedirect, validUserRedirect } = args ?? {}
  const cookieStore = cookies()
  const token = cookieStore.get('payload-token')?.value

  const meUserReq = await fetch(`${env.NEXT_PUBLIC_PAYLOAD_URL}/api/users/me`, {
    headers: {
      Authorization: `JWT ${token}`,
    },
  })

  const { user } = (await meUserReq.json()) as {
    user: User
  }

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (validUserRedirect && meUserReq.ok && user) {
    redirect(validUserRedirect)
  }

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (nullUserRedirect && (!meUserReq.ok || !user)) {
    redirect(nullUserRedirect)
  }

  return {
    token,
    user,
  }
}
