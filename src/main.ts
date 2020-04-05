import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import formatNumber from '@/modules/formatNumber'

Vue.config.productionTip = false
Vue.prototype.formatNumber = formatNumber

// @ts-ignore
window.Event = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
