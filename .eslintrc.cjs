/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
    '@vue/typescript/recommended'
  ],
   plugins: ['vue', 'typescript'],
  parserOptions: {
    ecmaVersion: 2020,
    parser: '@typescript-eslint/parser'
  },
  rules: {
    "vue/multi-word-component-names": "off",
    "prettier/prettier": "off",
    'vue/valid-v-model': 'off',
    'vue/no-v-model-argument': 'off',
  },
};
