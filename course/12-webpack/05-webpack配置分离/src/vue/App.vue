<!-- template会替换#app容器 -->
<template lang="zh-cn">
  <div>
    <h2 class="title">{{message}}</h2>
    <h2>vue template</h2>
    <Counter></Counter>
    <Counter></Counter>
  </div>
</template>
<script>
  import Counter from './Counter.vue'
  export default {
    name: "App",
    data() {
      return {
        message: "hello webpack"
      }
    },
    components: {
      Counter
    }
  }
</script>
<style scope>
  .title {
    color: green;
  }
</style>