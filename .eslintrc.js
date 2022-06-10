module.exports = {
  root: true,
  env: { node: true },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: { ecmaVersion: 2020 },
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-var-requires': 0,
  },

  overrides: [
    {
      files: ['**/__test__/*.{j,t}s?(x)', '**/test/**/*.spec.{j,t}s?(x)'],
      env: { mocha: true },
    },
  ],
}
