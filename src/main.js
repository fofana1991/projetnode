

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import jQuery from '../node_modules/jquery/dist/jquery.min.js'
import '../node_modules/jquery/dist/jquery.js'
import '../node_modules/jquery/dist/jquery.min.js'
global.jQuery = jQuery
import '../node_modules/popper.js/dist/popper.min.js'
import '../node_modules/popper.js/dist/popper.js'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue-icons.css'
import './assets/custom.css'
import './assets/wColorPicker.min.css'
import './assets/wColorPicker.min.js'


createApp(App).use(store).use(router).mount('#app')
