const { rules, default: plugin } = require('eslint-plugin-react');

// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ['expo', 'plugin:react-hooks/recommended'],
  rules: {
    'react-hooks/exhaustive-deps': 'warn',
  },
};
