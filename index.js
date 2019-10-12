const rules = require('./modules/rules');

module.exports = {
  extends: ['eslint:recommended', 'plugin:lit/recommended'],
  parser: 'babel-eslint',
  plugins: ['babel', 'lit'],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    mocha: true,
    jasmine: true
  },
  globals: {
    getTestContainer: true,
    cleanTestContainer: true,
    sinon: true,
    __webpack_public_path__: true,
    aofljsConfig: true,
    aoflDevtools: true
  },
  rules
};
