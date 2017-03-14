var render = require('pug').render
var transform = require('babel-core').transform

module.exports = function () {
  return {
    visitor: {
      TaggedTemplateExpression: function (path, state) {
        if (path.node.tag.name === 'pug') {
          var raw = path.node.quasi.quasis[0].value.raw
          var splitedRaw = raw
            .split('\n')
            .filter(function(str) {
              return str !== '' && str.match(/^\s*$/g) === null
            })

          var rootIndent = /^\s*/.exec(splitedRaw[0])[0]
          var fixedRaw = splitedRaw.map(function (raw) {
            var spaceRegExp = new RegExp(`^${rootIndent}`)
            return raw.replace(spaceRegExp, '')
          }).join('\n')

          var html = render(fixedRaw)
              .replace(/"\{/g, '{').replace(/\}"/g, '}').replace(/\};"/g, '}')
              .replace(/class="/g, 'className="').replace(/for="/g, 'htmlFor="')
              .replace(/\\\`/g, '`')

          html = '`' + html + '`'
          var ast = transform(html).ast
          path.replaceWithMultiple(ast.program.body)
        }
      }
    }
  }
}
