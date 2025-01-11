import imports from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['coverage', 'node-modules'] },
  {
    extends: [
      ...tseslint.configs.strict,
      ...tseslint.configs.stylistic,
      imports.flatConfigs.recommended,
      imports.flatConfigs.typescript,
    ],
    files: ['**/*.{ts,js}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.es2020,
    },
    plugins: {
      prettier,
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'warn',
      '@typescript-eslint/consistent-type-assertions': 'error',
      'import/no-unresolved': 'off',
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin', 'object'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
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
          printWidth: 88,
        },
      ],
    },
  },
);
