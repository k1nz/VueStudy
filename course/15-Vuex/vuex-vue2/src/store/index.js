import Vue from "vue"
import Vuex from "vuex"

// 导入类型常量
import mutations from "./mutations"
import getters from "./getters"
import actions from "./actions"
import moduleA from "./modules/moduleA"
import { INCREMENT, DECREMENT } from "./mutation-type"

Vue.use(Vuex)

const state = {
  counter: 0,
  student: [
    { id: 0, name: "k1nz", age: 20 },
    { id: 1, name: "kenny", age: 18 },
    { id: 2, name: "tom", age: 21 },
    { id: 3, name: "jerry", age: 19 },
  ],
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  // 异步操作
  actions,
  modules: {
    moduleA,
  },
})
