module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'global-require': 0,
    'no-console': 0,
    'dot-notation': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'no-unused-expressions': 0,
    'no-mixed-operators': 0,
    'max-len': 0,
    'no-eval': 0,
    'no-plusplus': 0,
    'consistent-return': 0,
  },
  'globals': {
    "window": true,
    "document": true
  }
}
