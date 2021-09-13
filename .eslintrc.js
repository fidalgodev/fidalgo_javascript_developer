module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  parser: 'babel-eslint', // uses babel-eslint transforms
  env: {
    node: true, // defines things like process.env when generating through node
  },
  extends: [
    'eslint:recommended', // use recommended configs
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'react/prop-types': 0,
  },
};
