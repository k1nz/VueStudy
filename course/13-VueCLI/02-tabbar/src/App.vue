<template>
  <div id="app">
    <main-tab-bar />
    <router-view />
  </div>
</template>
<script>
import MainTabBar from "@components/MainTabBar.vue"

export default {
  name: "App",
  components: {
    MainTabBar,
  },
}
</script>

<style>
.black-icon {
  font-size: 20px;
  color: black;
  margin-bottom: 2px;
}
</style>
