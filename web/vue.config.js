module.exports = {
  publicPath: './',
  configureWebpack: () => {
    return {
      resolve: {
        alias: {
          '@style': '@/assets/styles',
          '@font': '@/assets/fonts',
          '@img': '@/assets/img',
          '@svg': '@/assets/img/svg-compiled',
        },
      },
    }
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('vue-loader')
      .loader('vue-loader-v16')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
}
