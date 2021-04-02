import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

let data = {
  friends: mock,
  friendList: [],
  friendListSize: 0,
  currentGame: '',
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
