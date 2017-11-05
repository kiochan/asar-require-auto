require('asar-require')

function loadFromAsar (path) {
  let _json = require(path + '/package.json')
  let _module = require(path.resolve(path + '/package.json', _json.main))
  return _module
}

function asarRequireAuto (path) {
  let _module = null

  if (path.match(/\.asar$/)) {
    return loadFromAsar(path)
  }

  try {
    _module = loadFromAsar(path)
    return _module
  } catch (errAsar) {
    try {
      _module = require(path)
      return _module
    } catch (err) {
      throw err
    }
  }
}

module.exports = asarRequireAuto
