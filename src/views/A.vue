<template>
  <div class="a">
    <h1>a model </h1>
    <Button type="primary">
      elemnet ui button
    </Button>
    <Select>
    </Select>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button, Select } from 'element-ui'
Vue.use(Button).use(Select)
export default {
  name: 'A',
  methods: {
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
