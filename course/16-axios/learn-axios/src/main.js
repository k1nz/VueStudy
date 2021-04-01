import Vue from "vue"
import App from "./App.vue"

import axios from "axios"

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount("#app")

// axios
//   .post({
//     url: "http://gratour.info:8388/v1/login",
//     loginReq: {
//       userName: "admin",
//       password: "admin",
//     },
//   })
//   .then((res) => {
//     console.log(res)
//   })
//   .catch((err) => {
//     console.log(err)
//   })

axios
  .get("http://123.207.32.32:8000/home/multidata")
  .then((res) => {
    console.log(res)
  })
  .catch((err) => console.log(err))
