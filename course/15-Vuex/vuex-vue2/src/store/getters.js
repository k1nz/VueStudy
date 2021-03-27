export default {
  // 类似于计算属性，需要对state做出改变时使用
  powerCounter(state) {
    return state.counter * state.counter
  },
  over20age(state) {
    return state.student.filter((e) => e.age >= 20)
  },
  over20ageLength(state, getters) {
    return getters.over20age.length
  },
  ageFilters(state) {
    // return function(age) {
    //   return state.student.filter((e) => e.age >= age)
    // }
    return (age) => state.student.filter((e) => e.age >= age)
  },
}
