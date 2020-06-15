<template>
  <div class="main-header">
    <div class="header-content animated slideInUp">
      <h1 class="bold-text">Movie App Vue</h1>
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
  background-image: url('../../assets/header-bg3.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
