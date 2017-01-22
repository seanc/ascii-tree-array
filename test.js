const tree = require('.')
const test = require('tape')
const spec = require('tap-spec')

const data = [
  'foo',
  [
    'bar',
    'baz',
    [
      'qux',
      'qui'
    ]
  ]
]

test('list generation', t => {
  t.plan(1)
  const expected = '#foo\r\n##bar\r\n##baz\r\n###qux\r\n###qui'
  t.equal(tree.list(data), expected)
})

test.createStream()
  .pipe(spec())
  .pipe(process.stdout)
