require('asar-require')
const path = require('path')

function loadFromAsar (path_str) {
  let _json = require(path_str + '/package.json')
  let _module = require(
    path.resolve(path_str + '/package.json', _json.main)
  )
  return _module
}

function asarRequireAuto (path_str) {
  let _module = null

  if (path_str.match(/\.asar$/)) {
    _module = loadFromAsar(path_str)
  } else {
    _module = require(path_str)
  }

  return _module
}

module.exports = asarRequireAuto
