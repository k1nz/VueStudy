export default {
  state: {
    name: "ZhangSan",
  },
  getters: {
    fullname(state) {
      return state.name + "TEST"
    },
    fullname2(state, getters) {
      return getters.fullname + "Fullname2"
    },
    fullname3(state, getters, rootState) {
      return getters.fullname2 + rootState.counter
    },
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    },
  },
  actions: {
    asyncUpdateName(context) {
      // 这里的context上下文对象指的是当前模块(moduleA)
      setTimeout(() => {
        context.commit("updateName", "WangWu")
      }, 1000)
    },
  },
  modules: {},
}
