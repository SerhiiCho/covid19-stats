import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import formatNumber from '@/modules/formatNumber'

const app = createApp(App)

app.config.globalProperties.formatNumber = formatNumber

app.use(router)

app.mount('#app')
