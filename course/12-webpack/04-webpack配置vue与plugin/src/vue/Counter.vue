<template lang="zh-cn">
  <div>
    <h2>当前计数：{{counter}}</h2>
    <button @click="increament">+</button>
    <button @click="decreament">-</button>
  </div>
</template>
<script>
export default {
  name: "Counter",
  data() {
    return{
      counter: 0,
    }
  },
  methods: {
    increament() {
      this.counter++
    },
    decreament() {
      this.counter--
    }
  },
}
</script>
<style scope>
  div {
    border: 1px solid #666;
  }
</style>