<template>
  <div id="app">
    <div>app</div>
    <div @click="goKevinAction">去kevin</div>
    <div @click="goHomeAction">go home</div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goKevinAction () {
      // console.log(this.$router.push('kevin'))
      this.$router.push({ name: 'Kevin' })
    },
    goHomeAction () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style lang="scss">
#app{
  height: 100%;
  width: 100%;
  background: red;
  border: 1px solid black;
}
</style>
