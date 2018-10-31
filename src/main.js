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
  router: enrutador, //router: nombre del enrutador definidio en const name = new VueRouter;
  render: h => h(App)
})
