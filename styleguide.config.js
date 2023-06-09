module.exports = {
  // set your styleguidist configuration here
  title: 'vue-canister',
  components: 'src/components/**/[A-Z]*.vue',
  defaultExample: true,
  // sections: [
  //   {
  //     name: 'First Section',
  //     components: 'src/components/**/[A-Z]*.vue'
  //   }
  // ],
  webpackConfig: {
    // custom config goes here
  },
  exampleMode: 'expand',
  usageMode: 'expand',
  tocMode: 'expand',
  copyCodeButton: true
}
