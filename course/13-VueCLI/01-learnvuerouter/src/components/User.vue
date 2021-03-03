<template>
  <div>
    <!-- 1. 通过props方式取得数据 -->
    <!-- <h2>用户: {{userId}}</h2> -->
    <!-- 2. 通过this.$route.params. -->
    <h2>用户: {{userId}}</h2>
    <p>用户内容Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure inventore debitis totam, atque veniam nemo
      dolorem optio culpa enim asperiores quidem ab quaerat aut excepturi. Repudiandae unde atque illo aut!</p>

  </div>
</template>
<script>
  export default {
    name: 'User',
    // props: {
    //   userId: {
    //     type: String,
    //     required: true
    //   }
    // },
    computed: {
      userId() {
        return this.$route.params.userId
      }
    },
  }
</script>
<style scope>

</style>