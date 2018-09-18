'use strict'

const eyes = require('eyes')

const styles = {
  ...eyes.defaults.styles,
  ...{
    all: 'grey',
    string: 'red',
    label: 'yellow',
    key: 'cyan',
    bool: 'green',
    regexp: 'magenta',
    special: 'green'
  }
}

const isNil = x => x === undefined || x === null
const when = (pred, f) => x => (pred(x) ? f(x) : x)
const hasInspect = x => !isNil(x) && typeof x.inspect === 'function'
const inspect = when(hasInspect, x => x.inspect())
const write = eyes.inspector({ styles })

module.exports = (...args) =>
  !args.length
    ? (write(undefined), undefined)
    : args.length > 1
      ? (write(inspect(args[1]), args[0]), args[1])
      : (write(inspect(args[0])), args[0])
