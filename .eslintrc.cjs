/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  env: {
    node: true
  },
  root: true,
  'extends': ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier'],
  overrides: [{
    files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'], 'extends': ['plugin:cypress/recommended']
  }],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'vue/multi-word-component-names': 'off'
  }
}
