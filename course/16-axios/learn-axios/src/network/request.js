import axios from "axios"

// * 封装axios

// * 1. 第一种方法：参数传入对象
// export function request(config) {
//   // 创建axios实例
//   const axiosInstance = axios.create({
//     baseURL: "http://gratour.info:8388",
//     timeout: 5000,
//   })
//   // 发送网络请求
//   axiosInstance(config.baseConfig)
//     .then((res) => {
//       config.success(res)
//     })
//     .catch((err) => {
//       config.failure(err)
//     })
// }

// * 2. 第二种方法：
// export function request(config, success, failure) {
//   // 创建axios实例
//   const axiosInstance = axios.create({
//     baseURL: "http://gratour.info:8388",
//     timeout: 5000,
//   })

//   // 发送网络请求
//   axiosInstance(config)
//     .then((res) => {
//       success(res)
//     })
//     .catch((err) => {
//       failure(err)
//     })
// }

// * 3. 使用Promise
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     // 创建axios实例
//     const axiosInstance = axios.create({
//       baseURL: "http://gratour.info:8388",
//       timeout: 5000,
//     })

//     // 发送网络请求
//     axiosInstance(config)
//       .then((res) => {
//         resolve(res)
//       })
//       .catch((err) => {
//         reject(err)
//       })
//   })
// }

// * 4. 优化：
export function request(config) {
  // ** 1. 创建axios实例
  const axiosInstance = axios.create({
    baseURL: "http://gratour.info:8388",
    timeout: 5000,
  })

  // ** 2. 创建拦截器
  axiosInstance.interceptors

  // ** 3. 发送网络请求: 返回的是一个Promise对象
  return axiosInstance(config)
}
