<template>
  <div id="counter">
    <h2>counter: {{ $store.state.counter }}</h2>
    <button @click="">+</button>
    <button @click="">-</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {},
  methods: {
    increaments() {},
    decreaments() {},
  },
  setup() {},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
