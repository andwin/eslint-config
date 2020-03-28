const eslintRules = {
  extends: [
    'airbnb',
    'plugin:react/recommended',
  ],
  plugins: [
    'import',
    'react',
  ],
  env: { jest: true },
  rules: {
    'no-await-in-loop': 'off', // Allowing await in loops
    'no-plusplus': 'off', // Allowing the unary operators ++ and --
    'no-use-before-define': ['error', { functions: true, variables: false }], // Enabling use of functions before defined to be able to keep the most important functions at the top of the file
    'object-curly-newline': ['error', { multiline: true }], // require newline after curly for multiline objects
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }], // Allowing jsx in js-files
    'react/jsx-one-expression-per-line': 'off', // Allowing multiple expressions per line for example <span><h1></h1><p></p></span>
    semi: ['error', 'never'],
  },
}

module.exports = eslintRules
