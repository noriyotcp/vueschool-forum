<template>
  <div class="container">
    <!-- url が / のときは Home component を表示する -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
@import 'assets/style.css';
</style>
