module.exports = {
  // 此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,
  // 全局环境
  env: {
    node: true,
    browser: true,
    jest: true
  },
  // 指定如何解析语法。可以为空，但若不为空，只能配该值
  parser: 'vue-eslint-parser',
  // 优先级低于parse的语法解析配置
  parserOptions: {
    // 指定ESlint的解析器
    parser: '@typescript-eslint/parser',
    // 允许使用ES语法
    ecmaVersion: 2020,
    // 允许使用import
    sourceType: 'module',
    // 允许解析JSX
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  extends: [
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended'
  ],
  plugins: ['vue', '@typescript-eslint'],
  settings: {
    'import/extensions': ['.vue', '.js', '.jsx', '.ts', '.tsx', '.json'],
    'import/resolver': {
      node: {
        extensions: ['.vue', '.js', '.jsx', '.ts', '.tsx', '.json']
      },
      typescript: {
        extensions: ['.vue', '.js', '.jsx', '.ts', '.tsx', '.json']
      }
    }
  },
  rules: {}
}
