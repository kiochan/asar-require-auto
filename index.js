const path = require('path');
require('asar-require');


function loadFromAsar (path) {
  let _json = require(path + '/package.json');
  _module = require(path.resolve(path + '/package.json', a.main));
  return _module;
}


function asarRequireAuto (path) {

  let _module = null

  if (path.match(/\.asar$/)) {
    return loadFromAsar(path);
  }

  try {
    _module = loadFromAsar(path)
    return _module;
  } catch (_err_no_asar) {
    try {
      _module = require(path);
      return _module;
    } catch (_err) {
      throw _err;
    }
  }

  return _module;

}


module.exports = asarRequireAuto
