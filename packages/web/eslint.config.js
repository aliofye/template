import imports from 'eslint-plugin-import';
import jsxa11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['build', 'coverage', 'node-modules', '.react-router'] },
  {
    extends: [
      ...tseslint.configs.strict,
      ...tseslint.configs.stylistic,
      imports.flatConfigs.recommended,
      imports.flatConfigs.typescript,
    ],
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxa11y,
      prettier,
    },
    rules: {
      ...react.configs.recommended.rules,
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'error',
        {
          allowExportNames: [
            'meta',
            'links',
            'headers',
            'loader',
            'clientLoader',
            'action',
            'clientAction',
          ],
        },
      ],
      ...reactHooks.configs.recommended.rules,
      ...jsxa11y.configs.recommended.rules,
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
      'func-style': ['error', 'expression', { allowArrowFunctions: true }],
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
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
);
