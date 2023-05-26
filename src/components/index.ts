import Vue from 'vue'
import vueCompositionAPI from '@vue/composition-api'
import ExampleButton from './ExampleButton.vue'
Vue.config.productionTip = false
Vue.use(vueCompositionAPI)

Vue.component('ExampleButton', ExampleButton)

export default {
  ExampleButton
}

export {
  ExampleButton
}
