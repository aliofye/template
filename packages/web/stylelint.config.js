export default {
  ignoreFiles: ['**/node_modules/**', '**/build/**'],
  extends: ['stylelint-config-clean-order'],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
  },
};
