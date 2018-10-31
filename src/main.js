import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { rutas } from './rutas.js'

Vue.use(VueRouter);
const enrutador = new VueRouter({
  routes: rutas
});

new Vue({
  el: '#app',
  route: enrutador,
  render: h => h(App)
})
