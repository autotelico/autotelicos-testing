const capitalize = require('./capitalize');

it('capitalizes a single word', () => {
    expect(capitalize('biscoitinho')).toBe('Biscoitinho')
})

it('capitalizes every word in a string', () => {
    expect(capitalize('I am so hungry today! What is there to eat?')).toBe('I Am So Hungry Today! What Is There To Eat?')
})