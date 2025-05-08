// eslint.config.js
export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        window: 'readonly',
        document: 'readonly',
      }
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    rules: {
      'no-console': ['off', { allow: ['error'] }],  // CONSOLE.LOG WARN OU OFF
      'max-len': ['warn', { code: 150, ignoreComments: true, ignoreTemplateLiterals: true }],
      'sort-imports': ['error', {
        ignoreCase: false,
        ignoreMemberSort: false,
        ignoreDeclarationSort: true
      }],
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'never']
    }
  }
]