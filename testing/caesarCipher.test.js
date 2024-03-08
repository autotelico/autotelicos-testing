const caesarCipher = require('./caesarCipher')

it('Checks if zebra 3 becomes cheud', () => {
    expect(caesarCipher('zebra', 3)).toBe('cheud')
})

it('Checks if mathematics 1 becomes nbuifnbujdt', () => {
    expect(caesarCipher('mathematics', 1)).toBe('nbuifnbujdt')
})