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
    semi: ['error', 'never'],
  },
}

module.exports = eslintRules
