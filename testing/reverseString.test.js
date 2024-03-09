const reverseString = require('./reverseString');

it('Tests single word reversing', () => {
  expect(reverseString('carry')).toBe('yrrac');
});

it('Tests a sentence reversed', () => {
  expect(reverseString('I am sick right now')).toBe('won thgir kcis ma I');
});
