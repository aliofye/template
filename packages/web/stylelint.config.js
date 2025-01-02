export default {
  ignoreFiles: ['**/node_modules/**', '**/dist/**'],
  extends: ['stylelint-config-standard', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-order'],
  rules: {
    'color-no-invalid-hex': true,
    'font-family-no-missing-generic-family-keyword': true,
    'order/properties-alphabetical-order': true,
    'no-empty-source': null,
    'selector-class-pattern': null,
  },
};
