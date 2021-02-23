// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  // runtime-compiler:
  // components: { App },
  // template: '<App/>'

  template: "<h2>i am cpn</h2>",
  // 直接调用render函数：
  // h: HyperScript 用于创建html的script  (可理解为createElement函数)
  render(h) {
    // 1. 普通用法: h('标签', {标签的属性}, ['内容'])
    // return h("h2", { class: box }, ["helloRender", h("button", ["按钮"])]);
    //
    // 2.传入组件对象:
    // return h(cpn)
    // return h(App)
  }
});
