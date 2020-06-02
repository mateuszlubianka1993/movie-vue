<template>
  <div class="main-header">
    <div class="header-content">
      <h1>Movie App Vue</h1>
      <p>{{ msg }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
.main-header {
  background-color: aqua;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
