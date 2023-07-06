import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
// import Vue from "vue"
// import qs from 'qs.js'

// Nucleo Icons
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
// import '../node_modules/jquery/dist/jquery.min'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
// import Vue from 'vue'
import store from './store'
import materialKit from "./material-kit";
import * as Icons from '../node_modules/@element-plus/icons-vue'

const app = createApp(App);
for (let i in Icons) {
  app.component(i, Icons[i])
}
// Vue.prototype.$axios = axios    //全局注册，使用方法为:this.$axios
// Vue.prototype.qs = qs   //全局注册，使用方法为:this.qs
app.config.globalProperties.$store = store;
app.use(store)
app.use(createPinia());
app.use(router);
app.use(materialKit);
app.use(ElementPlus)
app.mount("#app");
