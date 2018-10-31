import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//esto es por que exportamos el nombre, desde from (donde)
import { rutas } from './rutas.js'

Vue.use(VueRouter);
//para las rutas ,c reamos un archigo llamado rutas.js

//creamos una nueva instancia del enrutador
const enrutador = new VueRouter({
  routes: rutas
});

new Vue({
  el: '#app',
  //decimos cual es el enrutador
  route: enrutador,
  render: h => h(App)
})
