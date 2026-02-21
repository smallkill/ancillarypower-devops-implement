// eslint.config.cjs
const eslintConfigPrettier = require('eslint-config-prettier/flat');

module.exports = [
  {
    files: ['tests/**/*.js'], // 只套用到 tests 資料夾
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
      },
    },
    rules: {
      'space-before-function-paren': ['error', 'never'], // 繼續套用主規則
    },
  },

  {
    // 你的 Node backend 程式規則
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        exports: 'readonly',
        require: 'readonly',
      },
    },
    rules: {
      'no-undef': 'error',
      'no-unused-vars': ['warn', { args: 'none', ignoreRestSiblings: true }],
      'no-redeclare': 'error',
      'no-constant-condition': 'warn',
      'no-console': 'off',

      // 風格規則
      semi: ['error', 'always'],
      indent: ['error', 2, { SwitchCase: 1 }],
      'comma-dangle': ['error', 'always-multiline'],
      'no-mixed-spaces-and-tabs': 'error',
      'space-before-function-paren': ['error', 'never'],
      'keyword-spacing': ['error', { before: true, after: true }],
      'block-spacing': ['error', 'always'],
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],

      // 不檢查單/雙引號
      quotes: 'off',

      // 潛在邏輯 / 錯誤防範
      eqeqeq: ['error', 'always'],
      'no-throw-literal': 'error',
      'consistent-return': 'warn',
      'no-empty-function': 'warn',
      'no-new-func': 'error',
    },
  },

  // 必須放在最後：關閉所有與 Prettier 衝突的格式規則，避免 format:fix 與 lint 衝突
  eslintConfigPrettier,
];
