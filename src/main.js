

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from '../node_modules/jquery/dist/jquery.js'
global.jQuery = jQuery
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue-icons.css'
import './assets/custom.css'

createApp(App).use(store).use(router).mount('#app')
