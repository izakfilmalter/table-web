import { Option, pipe } from 'effect'

export const toKebabCase = (string: string): string =>
  pipe(
    string,
    Option.fromNullable,
    Option.getOrElse(() => ''),
    (x) =>
      x
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .toLowerCase(),
  )
