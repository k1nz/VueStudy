var person = {
  name: "k1nz",
  age: 20,
}

let show = true

let showAge = function () {
  console.log(person.age)
}

// 1.导出方式一：
export { show, person, showAge }

// 2.导出方式二：
export var num1 = 10000
export var dog = {
  name: "chip",
  age: 3,
}

// 3.导出函数
export function mul(num1, num2) {
  return num1 * num2
}

// 4.导入类
export class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  run() {
    console.log("running")
  }
}

// 5.export default
// 可自定义导入变量名，只存在一个
const defaultVar = "自定义名称模块"
export default defaultVar
