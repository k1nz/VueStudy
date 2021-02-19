// 导入的{}中定义的变量
import { showAge, person, show } from "./TEST1.js"

if (show) {
  console.log(person.name)
  showAge()
}

// 2.直接导入export定义的变量
import { num1, dog } from "./TEST1.js"
console.log(num1)
console.log(dog.name)

// 3.导入export的function/class
import { Person, mul } from "./TEST1.js"
mul(30, 8)
let p1 = new Person("tom", 18)
p1.run()

// 4.导入export default中的内容
// 自定义命名
import aaa from "./TEST1.js"
console.log(aaa)

// 5.统一全部导入
import * as bbb from "./TEST1.js"

console.log(bbb.num1)
