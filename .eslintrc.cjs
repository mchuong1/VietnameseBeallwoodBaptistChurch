module.exports = {
  env: { browser: true, es2021: true, jest: true },
  extends: [
    'airbnb',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: { 
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    "no-unused-vars": "error",
    "react/button-has-type": 0,
    "import/prefer-default-export": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-filename-extension": [1, {
        "extensions": [".js", ".jsx"]
    }],
    "implicit-arrow-linebreak": 0,
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
  },
  overrides: [
    {
      "files": ["webpack.*.js", "setupTests.js"],
      "rules": {
        "import/no-extraneous-dependencies": 0
      }
    }
  ]
}
