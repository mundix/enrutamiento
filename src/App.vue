<template>
  <div class="container">
    <encabezado></encabezado>
    <div class="jumbotron">
      <!-- Aqui digo donde vue debe colocar la informacion de router -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
//Esto debe instalarse para vue js 2 que no viene
//$ npm install vue-router --save
import Encabezadox from './components/encabezado';

export default {
  components:{
    encabezado: Encabezadox
  }
}
</script>

<style>

</style>
