import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import  './router/permisson'
import Vuelidate from 'vuelidate'


Vue.use(Vuelidate)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
