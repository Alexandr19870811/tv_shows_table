export function formatArrayOfStrings(array: string[]): string[] {
  return !array.length ? [] : array.map(word => word + '\n')
}
