module.exports = {
  // 其他設定...
  productionSourceMap: false,
  css: {
    extract: false
  },
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  }
}
