const autoRequire = require('../index.js')

try {
  let add = autoRequire('./test/add.asar')
  if (add(1, 1) !== 2) throw Error('require fail!')
} catch (err) {
  console.log(err)
  process.exit(1)
}
