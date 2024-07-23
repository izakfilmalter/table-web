// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item: unknown): boolean {
  return item && typeof item === 'object' && !Array.isArray(item)
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
export default function deepMerge<T, R>(target: T, source: R): T {
  const output = { ...target }
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          Object.assign(output, { [key]: source[key] })
        } else {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          output[key] = deepMerge(target[key], source[key])
        }
      } else {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        Object.assign(output, { [key]: source[key] })
      }
    })
  }

  return output
}
