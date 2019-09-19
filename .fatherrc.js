export default {
  target: 'browser',
  umd: false,
  // extractCSS: true,
  esm: {
    type: 'babel'
  },
  cjs: {
    type: 'babel',
  },
  runtimeHelpers: true,
  extraBabelPlugins: [
    ['babel-plugin-add-module-exports'],
  ],
  // entry: 'src/index.js',
}
