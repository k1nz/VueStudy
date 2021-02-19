// 1.使用commonJS模块化规范
const { add, mul } = require("./js/mathUtils.js")
console.log(add(20, 19))
console.log(mul(20, 19))

// 2.使用ES6模块化规范
import { info } from "./js/info.js"
console.log(info.name, info.age, info.height)

// 3.css依赖
import "./css/simp.css"

// 4.less依赖
import "./css/special.less"

// 5.使用Vue开发
import Vue from "vue"
import App from "./vue/App.vue"

new Vue({
  el: "#app",
  template: `<App/>`,
  components: {
    App,
  },
})
