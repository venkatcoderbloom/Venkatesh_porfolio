<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <Particles />
  </div>
</template>
<script>
import Particles from '@/components/Particles.vue';

export default {
  components: {
    Particles,
  },
};
</script>
<style lang="scss">
html, body {
  height: 100%;
  margin: 0;
}
#app {
height: 100%;
}
</style>
