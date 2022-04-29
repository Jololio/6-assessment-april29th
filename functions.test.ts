const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('return an array', () => {
        expect(Array.isArray(shuffleArray(testArr))).toBe(true)
    })
    test('return an array of the same length as the arg sent in', () => {
        expect(shuffleArray(testArr)).toHaveLength(testArr.length)
    })
    test('have all the same items in the array', () => {
        expect(shuffleArray(testArr)).toEqual(expect.arrayContaining(testArr))
    })
    test('have shuffled around the items', () => {
       let result = shuffleArray(testArr)
       expect(result.join()).not.toEqual(testArr.join())
    })
})