module.exports = {
  ecmaFeatures: {
    globalReturn: false
  },
  env: {
    browser: true,
    jest: true,
    mocha: true,
    node: true
  },
  extends: ['standard', 'standard-react'],
  parser: 'babel-eslint'
}
