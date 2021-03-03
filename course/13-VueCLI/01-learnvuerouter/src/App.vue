<template>
  <div id="app">
    <router-link to="/home" tag="div">
      <p>首页</p>
    </router-link>
    <router-link to="/about" tag="div">
      <p>关于</p>
    </router-link>

    <!-- <div @click="homeClick"><p>首页</p></div> -->
    <!-- <div @click="aboutClick"><p>关于</p>    </div> -->
    <router-link :to="'/user/'+userId" tag="div">
      <p>用户</p>
    </router-link>
    <!-- <div @click="userClick">用户(函数)</div> -->
    <router-link :to="{path:'/profile', query: {name: 'k1nz', age: 18, height: '185cm'}}" tag="div">档案</router-link>
    <!-- <div @click="profileClick">档案(函数实现路由跳转)</div> -->

    <!-- 1. 使用props绑定userId -->
    <!-- <router-view :userId="userId"></router-view> -->
    <!-- 2. 使用动态路由取得数据 -->

    <!-- keep-alive 保持app的子组件不被销毁，即不进入destroy和beforeDestroy阶段 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        userId: 'k1nz'
      }
    },
    methods: {
      // 通过代码的方式修改路由vue-router
      homeClick() {
        // push => pushState
        // this.$router.push('/home')
        // replace => replaceState
        this.$router.replace('/home').catch(err => { })
      },
      aboutClick() {
        // this.$router.push('/about')
        this.$router.replace('/about').catch(err => { })
      },
      userClick() {
        this.$router.push('/user/' + this.userId).catch(err => { })
      },
      profileClick() {
        this.$router.push({
          path: "/profile",
          query: {
            name: "k1nz",
            age: 20,
            height: "188cm"
          }
        }).catch(err => { })
      }
    },
  }
</script>

<style>

</style>