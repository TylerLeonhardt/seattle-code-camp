import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueClipboard from 'vue-clipboard2'
import Toaster from 'v-toaster'

// You need a specific loader for CSS files like https://github.com/webpack/css-loader 
import 'v-toaster/dist/v-toaster.css'

// optional set default imeout, the default is 10000 (10 seconds). 
Vue.use(Toaster, {timeout: 5000})

Vue.use(VueClipboard)
 
Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  render: h => h(App)
})
