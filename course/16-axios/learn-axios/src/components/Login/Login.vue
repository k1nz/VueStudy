<template>
  <div id="login">
    <div class="userArea">
      <h2>username:</h2>
      <input type="text" v-model="loginReq.userName" placeholder="username" />
    </div>
    <div class="passwdArea">
      <h2>password:</h2>
      <input
        type="password"
        v-model="loginReq.password"
        placeholder="password"
      />
    </div>
    <button @click="login">submit</button>
  </div>
</template>
<script>
import axios from "axios"
import { request } from "@/network/request.js"

export default {
  name: "Login",
  data() {
    return {
      loginReq: {
        userName: undefined,
        password: undefined,
      },
    }
  },
  methods: {
    // login() {
    //   console.log(this.loginReq)
    //   axios
    //     .post("http://gratour.info:8388/v1/login", this.loginReq)
    //     .then((res) => {
    //       console.log(res)
    //     })
    //     .catch((err) => {
    //       console.log(err)
    //     })
    // },

    login() {
      // request({
      //   baseConfig: {
      //     method: "post",
      //     url: "/v1/login",
      //     data: this.loginReq,
      //   },
      //   success(res) {
      //     console.log(res)
      //   },
      //   failure(err) {
      //     console.log(err)
      //   },
      // })

      // * 使用Promise
      request({
        method: "post",
        url: "/v1/login",
        data: this.loginReq,
      })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>
<style></style>
