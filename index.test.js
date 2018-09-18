const log = require('.')

test('works', () => {
  expect(log()).toBeUndefined()
  expect(log({ object: true })).toBeDefined()
  expect(log('string')).toBeDefined()
  expect(log(/regexp/g)).toBeDefined()
  expect(log('does this work?', true)).toBeDefined()
})
