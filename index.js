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
    browser: true,
  },
  rules: {
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'consistent-return': 'off', // Allowing guard clauses returning undefined
    'no-await-in-loop': 'off', // Allowing await in loops
    'no-continue': 'off', // Allowing continue in loops
    'no-param-reassign': 'off', // Allowing reassigning of params
    'no-plusplus': 'off', // Allowing the unary operators ++ and --
    'no-restricted-syntax': [ // We allow for-of-loops
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'no-use-before-define': ['error', { functions: true, variables: false }], // Enabling use of functions before defined to be able to keep the most important functions at the top of the file
    'object-curly-newline': 'off', // Allowing choice of whether to use newline or not
    'react/forbid-prop-types': 'off', // Allowing objects as prop types
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }], // Allowing jsx in js-files
    'react/jsx-one-expression-per-line': 'off', // Allowing multiple expressions per line for example <span><h1></h1><p></p></span>
    'react/jsx-props-no-spreading': 'off', // Allowing props spreading
    radix: ['error', 'as-needed'],
    semi: ['error', 'never'], // No semicolons
  },
}

module.exports = eslintRules
