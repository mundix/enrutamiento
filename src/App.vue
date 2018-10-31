<template>
  <div class="container">
    <encabezado></encabezado>
    <div class="jumbotron">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Encabezadox from './components/encabezado';

export default {
  components:{
    encabezado: Encabezadox
  }
}
</script>

<style>

</style>
