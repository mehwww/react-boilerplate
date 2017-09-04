const isDev = process.env.NODE_ENV !== 'production';

export default {
  entry: 'src/index.js',
  publicPath: '/',
  disableCSSModules: false,
  autoprefixer: {
    browsers: [
      'last 7 versions',
      'Android >= 4.2',
      'iOS >= 6'
    ]
  },
  hash: false,
  extraBabelPlugins: [
    'transform-runtime',
    'transform-decorators-legacy',
    ['import', [{
      libraryName: 'antd',
      style: true
    }, {
      libraryName: 'antd-mobile',
      style: true
    }]]
  ],
  extraBabelIncludes: [
    './node_modules/react-echarts-v3/'
  ],
  define: {
    __DEVELOPMENT__: isDev,
    'process.env.NODE_ENV': isDev ? 'development' : 'production'
  }
};
