<template>
  <div class="hello">
    <h2>counter: {{ $store.state.counter }}</h2>
    <h2>powerCounter: {{ $store.getters.powerCounter }}</h2>
    <button @click="addition">+ 异步操作</button>
    <button @click="subraction">- 同步操作</button>

    <h2>大于20岁的学生: {{ $store.getters.over20age }}</h2>
    <h2>大于20岁的学生人数: {{ $store.getters.over20ageLength }}</h2>
    <h2>
      大于此人数的学生<input type="text" v-model="age" />：{{
        $store.getters.ageFilters(this.age)
      }}
    </h2>

    <button @click="addStudent">添加学生</button>

    <!-- modules -->
    <h2>学生名字：{{ $store.state.moduleA.name }}</h2>
    <button @click="updateName">更新学生信息</button>

    <!--  -->
    <h2>{{ $store.getters.fullname }}</h2>
    <h2>{{ $store.getters.fullname2 }}</h2>
    <h2>{{ $store.getters.fullname3 }}</h2>
    <button @click="asyncUpdateName">更新moduleA中的name</button>
  </div>
</template>

<script>
import { DECREMENT, INCREMENT } from "../store/mutation-type"
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    addition() {
      // * (1) 同步操作：
      // this.$store.commit("increment")
      // 使用类型常量
      // this.$store.commit(INCREMENT)

      // * (2) 异步操作
      // !以下方法是错误方法
      // setTimeout(() => {
      //   this.$store.dispatch("aIncrement", "im payload")
      // }, 1000);
      // !end
      // * 方法一:
      // this.$store.dispatch("aIncrement", "im payload")
      // * 方法二: Promise
      this.$store.dispatch("aIncrement", "im payload").then((v) => {
        console.log(v)
      })
    },
    subraction() {
      // this.$store.commit("decrement")
      this.$store.commit(DECREMENT)
    },
    addStudent() {
      // 1.默认提交封装
      this.$store.commit("addStu", {
        id: 4,
        age: 24,
        name: "john",
      })

      // 2.特殊提交封装
      // this.$store.commit({
      //   type: "addStu",
      //   id: 4,
      //   age: 24,
      //   name: "john",
      // })
    },
    // moduleA:
    updateName() {
      this.$store.commit("updateName", "LiSi")
    },
    asyncUpdateName() {
      this.$store.dispatch("asyncUpdateName")
    },
  },
  data() {
    return {
      age: 0,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
