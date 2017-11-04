# asar-require-auto (a Node Package)

This package will try to load asar file first.

It fix package [asar-require](https://www.npmjs.com/package/asar-require) cannot load asar package like...

```js
require('asar-require');

// if you do this
const foo = require('./a_package.asar/index.js'); // will ok

// but this
const foo = require('./a_package.asar'); // will throw error
```

# Install

```bash
npm install asar-require-auto
```

# Usage

Just require it and use like normal `require()`.

```js
// require the package
const asarRequireAuto = require('asar-require-auto');

// If "./name_of_some_module.asar" exist, it will load it first!
// Other case it will load "./name_of_some_module" like normal.
const some_module = asarRequireAuto('name_of_some_module');
```

It will also read `package.json` file and load the script where in `main` field.

# License

[MIT License](./LICENSE)

# Combinators

* ![Kiochan Avatar](https://avatars2.githubusercontent.com/u/12151173?s=64) [Kiochan](https://github.com/kiochan)
