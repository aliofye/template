import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';

export default tseslint.config(
  { ignores: ['dist', 'coverage', 'node-modules'] },
  {
    extends: [...tseslint.configs.strict, ...tseslint.configs.stylistic],
    files: ['**/*.{ts,tsx,js}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.es2020,
    },
    plugins: {
      prettier,
    },
    rules: {
      ...tseslint.configs.strict.rules,
      ...prettier.configs.recommended.rules,
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true,
          semi: true,
          useTabs: false,
          trailingComma: 'all',
          bracketSpacing: true,
          arrowParens: 'always',
          endOfLine: 'auto',
        },
      ],
      '@typescript-eslint/explicit-function-return-type': 'error',
    },
  },
);
