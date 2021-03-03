<template>
  <div>
    <h2>首页</h2>
    <p>首页内容Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque fugiat ab modi corrupti iusto nemo doloribus
      amet minima aut, possimus, rem vel! Odio alias nisi qui numquam dignissimos quam repellendus.</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

    <router-view></router-view>

  </div>
</template>
<script>
  export default {
    name: "Home",
    data() {
      return {
        path: '/home/news'
      }
    },
    activated() {
      this.$router.push(this.path)
    },
    beforeRouteLeave(to, from, next) {
      console.log(this.$route.path);
      this.path = this.$route.path
      next()
    },
    // updated: () => {
    //   console.log("updated");
    // },
    // beforeUpdate() {
    //   // this.path = this.$route.path
    //   console.log("beforeUpdate");
    // },
    // mounted() {
    //   console.log("mounted");
    // },
  }
</script>
<style>
</style>