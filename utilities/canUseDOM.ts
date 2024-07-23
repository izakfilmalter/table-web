export default !!(
  typeof window !== 'undefined' &&
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition,@typescript-eslint/prefer-optional-chain
  window.document &&
  window.document.createElement
)
