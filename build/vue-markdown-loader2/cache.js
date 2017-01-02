var fs = require('fs')
var path = require('path')
var rimraf = require('rimraf')

var cachePath = path.join(__dirname, '../.cache')
var cache = {
  save(filename, content) {
    var filePath = path.join(cachePath, filename + '.vue')

    try {
      fs.writeFileSync(filePath, content, 'utf8')
    } catch (err) {
      console.error(err)
    }

    return filePath
  },

  clean() {
    rimraf.sync(cachePath)
  }
}

cache.clean()
if (!fs.existsSync(cachePath)) {
  fs.mkdirSync(cachePath)
}

module.exports = cache
