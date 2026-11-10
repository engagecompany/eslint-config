
import tseslint from 'typescript-eslint';

import base from './base.js';

const typescript = [
  ...base,

  ...tseslint.configs.recommended,

  {
    files: ['**/*.{ts,tsx,mts,cts}'],

    rules: {
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
        },
      ],

      '@typescript-eslint/no-explicit-any': 'warn',

      '@typescript-eslint/no-non-null-assertion': 'warn',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
];

export default typescript;
