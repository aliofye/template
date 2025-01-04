export default {
  ignoreFiles: ['**/node_modules/**', '**/dist/**'],
  extends: ['stylelint-config-clean-order'],
  plugins: ['stylelint-prettier'],
  rules: {
    'prettier/prettier': true,
  },
};
