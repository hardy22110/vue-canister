import Vue from 'vue'
import App from './App.vue'
import vueCompositionAPI from '@vue/composition-api'

Vue.config.productionTip = false
Vue.use(vueCompositionAPI)

new Vue({
  render: h => h(App)
}).$mount('#app')
