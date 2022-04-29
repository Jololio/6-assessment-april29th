const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('return an array', () => {
        expect(shuffleArray).not.toBeNull();
    })
    test('return an array of the same length as the arg sent in', () => {
        expect(shuffleArray).toHaveLength(shuffleArray)
    })
    test('have all the same items in the array', () => {
        expect(shuffleArray).toContainEqual(shuffleArray)
    })
    test('have shuffled around the items', () => {
        expect(shuffleArray).toHaveReturned
    })
})