<template>
  <div id="app">
    <Navigation/>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navigation from './components/Header/Navigation.vue';
import Footer from './components/Footer/Footer';

export default {
  name: 'App',
  components: {
    Navigation,
    Footer
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 }
</style>
