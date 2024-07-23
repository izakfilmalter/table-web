import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { env } from '@/env.mjs'
import jwt from 'jsonwebtoken'

const payloadToken = 'payload-token'

// eslint-disable-next-line @typescript-eslint/require-await
export async function GET(
  req: Request & {
    cookies: {
      get: (name: string) => {
        value: string
      }
    }
  },
): Promise<Response> {
  const token = req.cookies.get(payloadToken).value
  const { searchParams } = new URL(req.url)
  const path = searchParams.get('path')

  if (!path) {
    return new Response('No path provided', { status: 404 })
  }

  if (!token) {
    new Response('You are not allowed to preview this page', { status: 403 })
  }

  const user = jwt.verify(token, env.PAYLOAD_SECRET)

  if (!user) {
    draftMode().disable()
    return new Response('You are not allowed to preview this page', {
      status: 403,
    })
  }

  draftMode().enable()
  redirect(path)
}
