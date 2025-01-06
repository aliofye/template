import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';

export default tseslint.config(
  { ignores: ['coverage', 'node-modules'] },
  {
    extends: [...tseslint.configs.strict, ...tseslint.configs.stylistic],
    files: ['**/*.{ts,js}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.es2020,
    },
    plugins: {
      prettier,
    },
    rules: {
      ...tseslint.configs.strict.rules,
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      '@typescript-eslint/consistent-type-assertions': 'error',
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
    },
  },
);
