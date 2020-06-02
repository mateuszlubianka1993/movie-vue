<template>
  <div id="app">
    <Navigation/>
    <Header msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Navigation from './components/Header/Navigation.vue'

export default {
  name: 'App',
  components: {
    Header,
    Navigation
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
