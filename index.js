require('asar-require')
const path = require('path')

function loadFromAsar (path_str) {
  let _json = require(path_str + '/package.json')
  let _module = require(path.resolve(path_str + '/package.json', _json.main))
  return _module
}

function asarRequireAuto (path_str) {
  let _module = null

  if (path_str.match(/\.asar$/)) {
    return loadFromAsar(path_str)
  }

  try {
    _module = loadFromAsar(path_str)
    return _module
  } catch (errAsar) {
    try {
      _module = require(path_str)
      return _module
    } catch (err) {
      throw err
    }
  }
}

module.exports = asarRequireAuto
