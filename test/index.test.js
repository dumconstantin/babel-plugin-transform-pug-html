var transform = require('babel-core').transform
var fs = require('fs')
var resolve = require('path').resolve
var plugin = require('./../src/index')
var minify = require('html-minifier').minify

let files = fs.readdirSync(resolve(__dirname, './spec'))

let specs = files.map(x => {
  return {
    name: x,
    file: fs.readFileSync(resolve(__dirname, `./spec/${x}`)).toString()
  }
})

specs.forEach(x => {
  test(x.name, () => {
    var res = transform(x.file, {
      plugins: [plugin]
    })

    // Creates the spec variable
    eval(res.code)

    var expected = minify(spec.expected, {
      collapseWhitespace: true,
      keepClosingSlash: true,
      caseSensitive: true
    })

    expect(spec.template).toEqual(expected)
  })
})