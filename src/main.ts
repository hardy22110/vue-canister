import Vue from 'vue'
import App from './App.vue'
import '@/assets/scss/index.scss'
import { Icon, Column, Table, Footer, Modal } from 'vxe-table'

Vue.use(Icon)
  .use(Column)
  .use(Table)
  .use(Footer)
  .use(Modal)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
