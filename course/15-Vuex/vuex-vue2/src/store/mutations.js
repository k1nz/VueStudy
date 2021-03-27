import { INCREMENT, DECREMENT } from "./mutation-type"

export default {
  // 使用mutations改变state可以在devtools中监测state值被谁改变
  // increment(state) {
  // 使用类型常量
  [INCREMENT](state) {
    state.counter++
  },
  // decrement(state) {
  [DECREMENT](state) {
    state.counter--
  },
  addStu(state, stu) {
    if (stu.id != undefined && stu.name != undefined && stu.age != undefined) {
      state.student.push(stu)
    }
  },
}
