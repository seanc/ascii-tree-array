const asciiTree = require('ascii-tree')
const traverse = require('traverse')
const repeatString = require('repeat-string')

const list = exports.list = function list(struct) {
  const signature = traverse(struct).reduce(function(acc, x) {
    const reset = this.isLeaf ? '\r\n' : ''
    if (!Array.isArray(x)) acc += repeatString('#', this.level) + x + reset
    return acc
  }, '')
  return signature.trim()
}

const tree = exports.tree = function tree(struct) {
  return asciiTree.generate(list(struct))
}
