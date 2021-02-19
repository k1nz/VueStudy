<!-- template会替换#app容器 -->
<template lang="zh-cn">
  <div>
    <h2 class="title">{{message}}</h2>
    <h2>vue template</h2>
  </div>
</template>
<script>
  export default {
    name: "App",
    data() {
      return {
        message: "hello webpack"
      }
    }
  }
</script>
<style scope>
  .title {
    color: green;
  }
</style>