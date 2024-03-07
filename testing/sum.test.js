const sum = require('./sum');

it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})

test('checks for object equality', () => {
    const data = {one: 1}
    data['two'] = 2
    expect(data).toEqual({one: 1, two: 2})
})

it('checks if the sum is no greater than 4', () => {
    expect(sum(1, 2)).toBeLessThan(4)
})
