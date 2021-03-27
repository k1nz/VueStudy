import { INCREMENT, DECREMENT } from "./mutation-type"

export default {
  // * 方法一:
  // aIncrement(context, payload) {
  //   setTimeout(() => {
  //     context.commit(INCREMENT)
  //     console.log(payload)
  //   }, 1000)
  // },
  // * 方法二: Promise
  aIncrement(context, payload) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        console.log(payload)
        context.commit(INCREMENT)
        res("success")
      }, 1000)
    })
  },
}
