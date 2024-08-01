import { Option, pipe } from 'effect'
import type { AccessArgs } from 'payload'
import type { User } from 'payload-types'

type isAuthenticated = (args: AccessArgs<User>) => boolean

export const authenticated: isAuthenticated = ({ req: { user } }) =>
  pipe(user, Option.fromNullable, Option.isSome)
