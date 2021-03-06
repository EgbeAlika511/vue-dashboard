import Vue from 'vue'
import app from './app.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// import the scss file 
import './app.scss'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(app),
}).$mount('#app')

