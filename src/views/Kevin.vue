<template>
  <div class="kevin">
      <div class="wapre">
          this is keivn
          <div @click="goA">go a</div>
          <div @click="goB">go b</div>
        <router-view />
      </div>
  </div>
</template>

<script>

export default {
  name: 'Kevin',
  components: {
  },
  methods: {
    goA () {
      this.$router.push({ name: 'A' })
    },
    goB () {
      this.$router.push('b')
    }
  }
}
</script>

<style lang="scss">
.wapre{
  height: 200px;
  width: 100px;
  background: blanchedalmond;
}
</style>
