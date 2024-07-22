/// <reference types="./eslintTypes.d.ts" />

import eslint from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import tseslint from 'typescript-eslint'

import reactPlugin from 'eslint-plugin-react'
import reactCompilerPlugin from 'eslint-plugin-react-compiler'
import hooksPlugin from 'eslint-plugin-react-hooks'
import nextPlugin from '@next/eslint-plugin-next'


/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ['.next/**', 'public/**'],
  },
  ...tseslint.config(
    {
      // Globally ignored files
      ignores: ['**/*.config.*'],
    },
    {
      files: ['**/*.js', '**/*.ts', '**/*.tsx'],
      plugins: {
        import: importPlugin,
      },
      extends: [
        eslint.configs.recommended,
        ...tseslint.configs.recommended,
        ...tseslint.configs.recommendedTypeChecked,
        ...tseslint.configs.stylisticTypeChecked,
      ],
      rules: {
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
        ],
        '@typescript-eslint/consistent-type-imports': [
          'warn',
          { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
        ],
        '@typescript-eslint/no-misused-promises': [
          2,
          { checksVoidReturn: { attributes: false } },
        ],
        '@typescript-eslint/no-unnecessary-condition': [
          'error',
          {
            allowConstantLoopConditions: true,
          },
        ],
        '@typescript-eslint/no-non-null-assertion': 'error',
        'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
        'arrow-body-style': ['warn', 'as-needed'],
        'turbo/no-undeclared-env-vars': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/array-type': ['error', { default: 'generic' }],
        'no-restricted-imports': [
          'error',
          {
            name: 'jotai/index',
            message: "Please use 'jotai' instead",
          },
        ],
      },
    },
    {
      linterOptions: { reportUnusedDisableDirectives: true },
      languageOptions: { parserOptions: { projectService: true } },
    },
  ),
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mdx'],
    plugins: {
      react: reactPlugin,
      'react-hooks': hooksPlugin,
      'react-compiler': reactCompilerPlugin,
    },
    rules: {
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...hooksPlugin.configs.recommended.rules,
      'react-compiler/react-compiler': 'error',
      'react/jsx-curly-brace-presence': ['warn', { props: 'always' }],
      'react-hooks/exhaustive-deps': [
        'error',
        {
          additionalHooks:
            '(useStableEffect|useStableLayoutEffect|useStableCallback|useStableMemo)',
        },
      ],
    },
    languageOptions: {
      globals: {
        React: 'writable',
      },
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      // TypeError: context.getAncestors is not a function
      '@next/next/no-duplicate-head': 'off',
    },
  },
]
