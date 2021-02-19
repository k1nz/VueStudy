// 1.使用commonJS模块化规范
const { add, mul } = require("./mathUtils.js")
console.log(add(20, 19))
console.log(mul(20, 19))

// 2.使用ES6模块化规范
import { info } from "./info.js"
console.log(info.name, info.age, info.height)
