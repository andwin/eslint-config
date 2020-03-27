const eslintRules = {
  extends: [
    'airbnb',
    'plugin:react/recommended',
  ],
  plugins: [
    'import',
    'react',
  ],
  env: {
    jest: true,
  },
  rules: {
    'no-use-before-define': ['error', { functions: true, variables: false }], // Enabling use of functions before defined to be able to keep the most important functions at the top of the file
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }], // Allowing jsx in js-files
    'react/jsx-one-expression-per-line': 'off', // Allowing multiple expressions per line for example <span><h1></h1><p></p></span>
    semi: ['error', 'never'],
  },
}

module.exports = eslintRules
