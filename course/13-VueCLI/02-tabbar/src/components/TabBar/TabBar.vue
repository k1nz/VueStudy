<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>
<script>

  export default {
    name: "TabBar"
  }
</script>
<style scope>
  @import url(../../assets/css/base.css);

  :root {
    --fontSize: 15px;
  }

  #tab-bar {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 13.333vw;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0 -1px 3px rgba(102, 102, 102, 0.212);
  }
</style>