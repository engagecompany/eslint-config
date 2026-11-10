
import globals from 'globals';

import typescript from './typescript.js';

const nodeConfig = [
  ...typescript,

  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],

    languageOptions: {
      globals: globals.node,
    },

    rules: {
      'no-process-exit': 'off',
    },
  },
];

export default nodeConfig;
