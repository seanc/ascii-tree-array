# ascii-tree-array [![NPM version](https://badge.fury.io/js/ascii-tree-array.svg)](https://npmjs.org/package/ascii-tree-array) [![Build Status](https://travis-ci.org/seanc/ascii-tree-array.svg?branch=master)](https://travis-ci.org/seanc/ascii-tree-array)

> Create ascii text trees from multidimensional arrays

## Installation

```sh
$ npm install --save ascii-tree-array
```

## Usage

```js
const asciiTree = require('ascii-tree-array')
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

asciiTree.list(data)
// => #foo\r\n##bar\r\n##baz\r\n###qux\r\n###qui

asciiTree.tree(data)
// =>
foo
├─ bar
└─ baz
   ├─ qux
   └─ qui
```

## API

#### asciiTree.tree(array)
    => **Returns** `String`

When passing in an array, there should be only one value that is to be your root. For example:

```
[
  'home',
  [
    'sean'
  ]
]
```

is allowed. However,

```
[
  'home',
  'sean',
  [
    'projects'
  ]
]
```

is not. This is because there can only be a single root to the tree.


#### asciiTree.list(array)
  => **Returns** `String`

This will return a raw bullet list of your array.


## License

MIT © [Sean Wilson](https://imsean.me)
