import Vue from 'vue'
import ExampleButton from './ExampleButton.vue'
import MovingWindow from './MovingWindow.vue'
import '@/assets/scss/index.scss'
import { Icon, Column, Table, Footer, Modal } from 'vxe-table'

Vue.use(Icon)
  .use(Column)
  .use(Table)
  .use(Footer)
  .use(Modal)

Vue.config.productionTip = false

Vue.component('ExampleButton', ExampleButton)
Vue.component('MovingWindow', MovingWindow)

export default {
  ExampleButton,
  MovingWindow
}

export { ExampleButton, MovingWindow }
