import { formatArrayOfStrings } from '../formatArrayOfStrings'

describe("formatArrayOfStrings function", () => {

  it("Should add '\\n' after each item of array", () => {
    const array = ['one', 'two', 'three']
    const result = ['one\n', 'two\n', 'three\n']

    expect(formatArrayOfStrings(array)).toEqual(result)
  })

  it("Should return empty array", () => {
    const array: string[] = []
    const result: string[] = []

    expect(formatArrayOfStrings(array)).toEqual(result)
  })

})
