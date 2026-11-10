
import eslint from '@eslint/js';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier/flat';

const base = [
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      '**/.expo/**',
      '**/android/**',
      '**/ios/**',
      '**/*.min.js',
    ],
  },

  eslint.configs.recommended,

  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    plugins: {
      import: importPlugin,
    },

    rules: {
      'array-callback-return': 'error',
      'consistent-return': 'error',

      curly: ['error', 'all'],
      eqeqeq: ['error', 'always'],

      'no-alert': 'warn',
      'no-console': [
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],

      'no-debugger': 'error',
      'no-duplicate-imports': 'error',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-eval': 'error',
      'no-return-await': 'error',
      'no-var': 'error',

      'import/first': 'error',
      'import/no-duplicates': 'error',
      'import/newline-after-import': 'warn',

      'object-shorthand': ['error', 'always'],
      'prefer-const': 'error',
      'prefer-template': 'warn',
    },
  },

  prettier,
];

export default base;
