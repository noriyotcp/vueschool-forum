module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'prettier',
    'prettier/vue'
  ],

  parserOptions: {
    parser: '@babel/eslint-parser'
  },

  rules: {
    quotes: ['warn', 'single'],
    'space-before-function-paren': ['error', 'always'],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'vue/mustache-interpolation-spacing': 'warn'
  }
};
