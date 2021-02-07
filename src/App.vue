<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="container">
    <!-- url が / のときは PageHome component を表示する -->
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
};
</script>

<style>
@import "assets/style.css";
</style>
